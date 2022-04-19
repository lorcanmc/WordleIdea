import React from "react";

export default function CompletedContainer({ gridFormatting }) {
  
  function copyToClipboard() {
    navigator.clipboard.writeText("feature under construction")
  }
    return (
    <div className="completed-container">
      <p className="successmessage">CONGRATULATIONS</p>
      <button className="share-button" onClick={() => copyToClipboard()}>Copy to clipboard</button>
    </div>
  );
}
