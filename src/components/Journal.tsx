import "./Journal.css";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
const Journal = () => {
  const [entry, setEntry] = useState("");
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
        <button className="Button">Talk to AI</button>
        <button className="Button">Sumbit</button>
      </div>
    </div>
  );
};
export default Journal;
