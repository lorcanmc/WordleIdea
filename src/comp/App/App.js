import { useState } from "react";

import { useEventListener } from "../../hooks/index.js";
import Grid from "../Grid";
import Header from "../Header";
import "./App.css";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentRow, setCurrentRow] = useState(1);

  const handler = ({ key }) => {
    const keyPressed = String(key.toUpperCase());

    //check input is a letter
    //ADD BACKSPACE FUNCTIONALITY
    if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + keyPressed);
    }
  };

  useEventListener("keydown", handler);

  return (
    <div className="App">
      <Header></Header>
      <Grid currentRow={currentRow} currentGuess={currentGuess} ></Grid>
    </div>
  );
}

export default App;
