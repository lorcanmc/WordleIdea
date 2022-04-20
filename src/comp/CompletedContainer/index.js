import React from "react";

export default function CompletedContainer({ gridFormatting }) {
  function copyToClipboard() {
    //   alert("Copied")
    const tiles = gridFormatting.map((nested) =>
      nested.map((tile) => {
        if (tile.backgroundColor === "rgb(80, 171, 92)") {
          return "🟩";
        } else if (tile.backgroundColor === "rgb(212, 182, 32)") {
          return "🟨";
        } else if (tile.backgroundColor === "rgb(144, 144, 144)") {
          return "⬜";
        } else {
          return "X";
        }
      })
    );
    let copyStr = "Animle No. 3";
    tiles.forEach((row) => {
      if (row[0] !== "X") {
        copyStr += "\n" + row.join("");
      }
    });
    navigator.clipboard.writeText(copyStr);
  }
  return (
    <div className="completed-container">
      <p className="successmessage">CONGRATULATIONS</p>
      <button className="share-button" onClick={() => copyToClipboard()}>
        Copy to clipboard
      </button>
    </div>
  );
}
