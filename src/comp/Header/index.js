import React from "react";
import SimpleModal from "../Modal";

export default function Header() {
  return (
    <header className="App-header">
      <div className="modalcontainer">
        <SimpleModal />
      </div>

      <h1>ANIMLE</h1>
      <div className="modalcontainer"></div>
    </header>
  );
}
