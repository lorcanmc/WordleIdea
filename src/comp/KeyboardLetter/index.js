import React from "react";

export default function KeyboardLetter({ text, handler, backgroundColor }) {
  return (
    <div
      className="keyboardletter"
      style={{
        backgroundColor: backgroundColor,
        color: backgroundColor === "rgb(220, 220, 220)" ? "black" : "white",
      }}
      onClick={() => handler(text)}
    >
      {text}
    </div>
  );
}
