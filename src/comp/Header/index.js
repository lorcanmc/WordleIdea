import React from "react";
import SimpleModal from "../SimpleModal";

export default function Header() {
  return (
    <header className="App-header">

      <div className="modalcontainer"></div>
      <h1>ANIMLE</h1>
      <div className="modalcontainer">
        <SimpleModal />
      </div>

      
    </header>
  );
}
