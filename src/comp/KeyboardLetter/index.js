import React from "react";

export default function KeyboardLetter({ text, handler }) {
  return (
    <div className="keyboardletter" onClick={() => handler(text)}>
      {text}
    </div>
  );
}
