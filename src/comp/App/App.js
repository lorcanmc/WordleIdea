import { useState } from "react";

import { useEventListener } from "../../hooks/index.js";
import Grid from "../Grid";
import Header from "../Header";
import "./App.css";

function App() {
  const [dailyWord, setDailyWord] = useState("TIGER");
  const [currentGuess, setCurrentGuess] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(["white", "white", "white", "white", "white"]);
  const [currentRow, setCurrentRow] = useState(1);

  const handler = ({ key }) => {
    const keyPressed = String(key.toUpperCase());

    if (
      currentGuess.length < 5 &&
      keyPressed.length === 1 &&
      keyPressed.charCodeAt(0) >= 65 &&
      keyPressed.charCodeAt(0) <= 90
    ) {
      setCurrentGuess(currentGuess + keyPressed);
    } else if (keyPressed === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    } else if (keyPressed === "ENTER" && currentGuess.length === dailyWord.length) {
      checkWord();
      console.log("check")
    }
  };

  function checkWord() {
    let arr = []
    for (let i = 0; i < currentGuess.length; i++) {
      if(currentGuess[i] === dailyWord[i]) {
        arr.push("rgb(80, 171, 92)")
      } else if(dailyWord.includes(currentGuess[i])) {
        arr.push("rgb(212, 182, 32)")
      } else {
        arr.push("rgb(144, 144, 144)")
      }
    }
    console.log(arr)
    setBackgroundColor(arr)
    setCurrentRow(currentRow+1)
   
  }

  useEventListener("keydown", handler);

  return (
    <div className="App">
      <Header></Header>
      <Grid
        currentGuess={currentGuess}
        dailyWord={dailyWord}
        backgroundColor={backgroundColor}
      ></Grid>
    </div>
  );
}

export default App;
