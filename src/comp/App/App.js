import { useState } from "react";

import { useEventListener } from "../../hooks/index.js";
import Grid from "../Grid";
import Header from "../Header";
import Keyboard from "../Keyboard/index.js";
import map from "../../images/maps/Camel.png";
import "./App.css";

const COLORS = {
  lightGrey: "rgb(220, 220, 220)",
  darkGrey: "rgb(144, 144, 144)",
  yellow: "rgb(212, 182, 32)",
  green: "rgb(80, 171, 92)",
};

function App() {
  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [dailyWord] = useState("CAMEL");
  const [currentRow, setCurrentRow] = useState(0);
  const [currentTile, setCurrentTile] = useState(0);
  const [gridFormatting, setGridFormatting] = useState(
    Array(6)
      .fill()
      .map(() =>
        Array(5).fill({
          letter: "",
          color: "black",
          borderColor: COLORS.lightGrey,
          backgroundColor: "white",
        })
      )
  );
  const [keyboardColors] = useState(
    Array(26).fill(COLORS.lightGrey)
  );

  const handler = (key) => {
    const keyPressed = String(key.toUpperCase());
    if (
      keyPressed.charCodeAt(0) >= 65 &&
      keyPressed.charCodeAt(0) <= 90 &&
      currentTile < 5 &&
      keyPressed.length === 1
    ) {
      setGridFormatting([
        ...gridFormatting.slice(0, currentRow),
        [
          ...gridFormatting[currentRow].slice(0, currentTile),
          {
            ...gridFormatting[currentRow][currentTile],
            letter: keyPressed,
            borderColor: COLORS.darkGrey,
          },
          ...gridFormatting[currentRow].slice(currentTile + 1),
        ],
        ...gridFormatting.slice(currentRow + 1),
      ]);
      setCurrentTile(currentTile + 1);
    } else if (
      (keyPressed === "BACKSPACE" || keyPressed === "BCK") &&
      currentTile >= 1
    ) {
      setGridFormatting([
        ...gridFormatting.slice(0, currentRow),
        [
          ...gridFormatting[currentRow].slice(0, currentTile - 1),
          {
            ...gridFormatting[currentRow][currentTile],
            letter: "",
            borderColor: COLORS.lightGrey,
          },
          ...gridFormatting[currentRow].slice(currentTile),
        ],
        ...gridFormatting.slice(currentRow + 1),
      ]);
      setCurrentTile(currentTile - 1);
    } else if ((keyPressed === "ENTER"|| keyPressed === "ENT") && currentTile === 5) {
      checkWord();
    }
  };

  function checkWord() {
    let rowFormatting = [...gridFormatting[currentRow]];
    rowFormatting = rowFormatting.map((obj) => {
      return { ...obj, color: "white", borderColor: "transparent" };
    });
    for (let i = 0; i < 5; i++) {
      const alphabetPos = rowFormatting[i].letter.charCodeAt(0) - 65;
      if (rowFormatting[i].letter === dailyWord[i]) {
        rowFormatting[i].backgroundColor = COLORS.green;
        keyboardColors[alphabetPos] = COLORS.green;
      } else if (dailyWord.includes(rowFormatting[i].letter)) {
        rowFormatting[i].backgroundColor = COLORS.yellow;
        if (keyboardColors[alphabetPos] !== COLORS.green) {
          keyboardColors[alphabetPos] = COLORS.yellow;
        }
      } else {
        rowFormatting[i].backgroundColor = COLORS.darkGrey;
        keyboardColors[alphabetPos] = COLORS.darkGrey;
      }
    }

    setGridFormatting([
      ...gridFormatting.slice(0, currentRow),
      rowFormatting,
      ...gridFormatting.slice(currentRow + 1),
    ]);

    if (rowFormatting.every((tile) => tile.backgroundColor === COLORS.green)) {
      setCompleted(true);
    } else if(currentRow === 5) {
      setFailed(true)
    }

    setCurrentTile(0);
    if (currentRow < 6) {
      setCurrentRow(currentRow + 1);
    }
  }

  useEventListener("keydown", (e) => handler(e.key));

  return (
    <div className="App">
      <Header />
      <div className="map">
        <img src={map} alt="map" />
      </div>

      <Grid gridFormatting={gridFormatting} />
      {completed ? <p className="successmessage">CONGRATULATIONS</p> : <></>}
      {failed ? <p className="successmessage">Unlucky, the answer was {dailyWord}</p> : <></>}
      <Keyboard handler={handler} keyboardColors={keyboardColors} />
    </div>
  );
}

export default App;
