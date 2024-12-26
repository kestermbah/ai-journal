const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
require("dotenv").config();

//openai api SETUP
const OpenAI = require("openai");
const baseURL = "https://api.aimlapi.com/v1";
const apiKey = process.env.API_KEY;
const systemPrompt = "Pretend you are a therapist. Help me analyze this: ";
const api = new OpenAI({
  apiKey,
  baseURL,
});

//googleAI API SETUP
const { GoogleGenerativeAI } = require("@google/generative-ai");
const googleApiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(googleApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const PORT = 3131;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and ready");
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.status(200).json({ message: "Connected successfully!" });
});

// OpenAI API SUBMISSION
app.post("/api/submit", async (req, res) => {
  try {
    const aiResponse = await api.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: req.body.userPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1,
    });
    const response = aiResponse.choices[0].message.content;

    console.log("OpenAI response:", response);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).send({ error: "Failed to process request" });
  }
});

// GoogleAI API SUBMISSION
app.post("/api/google", async (req, res) => {
  try {
    const prompt =
      "Emulate a therapist. Give a theraputic response to this that's not too long: " +
      req.body.userPrompt;
    const feeling =
      "Guess the feeling of the user with one word: " + req.body.userPrompt;
    const aiResponse = await model.generateContent(prompt);
    const aiFeeling = await model.generateContent(feeling);

    //Convert the response to text
    const analysis = aiResponse.response.text();
    const guessedFeeling = aiFeeling.response.text();

    console.log("GoogleAI response:", analysis);
    console.log("GoogleAI feeling:", guessedFeeling);
    res.status(200).json({
      analysis,
      guessedFeeling,
    });
  } catch (error) {
    console.error("Error calling GoogleAI API:", error);
    res.status(500).send({ error: "Failed to process request" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
