import "./Journal.css";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
const Journal = () => {
  // State to store the user input
  const [entry, setEntry] = useState("");
  // State to store the AI response
  const [response, setResponse] = useState(null);
  // State to store the loading status
  const [loading, setLoading] = useState(false);
  //AI function
  const handleReset = () => {
    setEntry("");
    setResponse(null);
  };
  const handleTalkToAI = async () => {
    setLoading(true);
    try {
      // Send a POST request to the backend
      const res = await fetch("http://localhost:3131/api/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Send the user input to the backend as JSON
        body: JSON.stringify({ userPrompt: entry }),
      });
      // If the backend manually sends an error status throw an error
      if (!res.ok) {
        throw new Error("Failed to talk to AI");
      }
      // Parse the JSON response
      const data = await res.json();
      setResponse(data);
      // catches all other errors
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Journal">
      <h1 className="Title">Journal Entry</h1>
      <div className="Entry">
        <TextareaAutosize
          onChange={(e) => setEntry(e.target.value)}
          className="Content"
          placeholder="Write..."
        />
      </div>
      <div className="Actions">
        <button
          onClick={handleTalkToAI}
          id="AI-Btn"
          className="Button"
          disabled={loading}
        >
          {loading ? "Loading..." : "Talk to AI"}
        </button>
        <button onClick={handleReset} className="Button">
          Reset
        </button>
      </div>
      <div className="Response">
        {response && (
          <div>
            <h2>AI Response</h2>
            <p>
              <strong>Analysis: </strong>
              {response.analysis}
            </p>
            <p>
              <strong>Guessed Feeling: </strong>
              {response.guessedFeeling}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Journal;
