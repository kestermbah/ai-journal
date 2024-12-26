const express = require("express");
const app = express();
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

const PORT = 3131;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Your API key is: ${api_Key}`);
});

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

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
