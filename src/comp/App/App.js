import { useState } from "react";

import { useEventListener } from "../../hooks/index.js";
import Grid from "../Grid";
import Header from "../Header";
import SimpleModal from "../Modal/index.js";
import "./App.css";

const COLORS = {
  lightGrey: "rgb(204, 204, 204)",
  darkGrey: "rgb(144, 144, 144)",
  yellow: "rgb(212, 182, 32)",
  green: "rgb(80, 171, 92)",
};

function App() {
  const [dailyWord] = useState("TIGER");
  // const [currentGuess, setCurrentGuess] = useState("");
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
  console.log(gridFormatting);

  const handler = ({ key }) => {
    const keyPressed = String(key.toUpperCase());

    if (
      currentTile < 5 &&
      keyPressed.length === 1 &&
      keyPressed.charCodeAt(0) >= 65 &&
      keyPressed.charCodeAt(0) <= 90
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
    } else if (keyPressed === "BACKSPACE") {
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
    } else if (keyPressed === "ENTER" && currentTile === 5) {
      checkWord();
    }
  };

  function checkWord() {
    let rowFormatting = [...gridFormatting[currentRow]];
    rowFormatting = rowFormatting.map((obj) => {
      return { ...obj, color: "white", borderColor: "transparent" };
    });
    for (let i = 0; i < 5; i++) {
      if (rowFormatting[i].letter === dailyWord[i]) {
        rowFormatting[i].backgroundColor = COLORS.green;
      } else if (dailyWord.includes(rowFormatting[i].letter)) {
        rowFormatting[i].backgroundColor = COLORS.yellow;
      } else {
        rowFormatting[i].backgroundColor = COLORS.darkGrey;
      }
    }

    setGridFormatting([
      ...gridFormatting.slice(0, currentRow),
      rowFormatting,
      ...gridFormatting.slice(currentRow + 1),
    ]);

    if (rowFormatting.every((tile) => (tile.backgroundColor = COLORS.green))) {
      console.log("correct")
      alert("CORRECT")
    }

    setCurrentTile(0);
    if (currentRow < 6) {
      setCurrentRow(currentRow + 1);
    }
  }

  useEventListener("keydown", handler);

  return (
    <div className="App">
      <Header></Header>
      <div className="modalcontainer">
        <SimpleModal></SimpleModal>
      </div>

      <Grid gridFormatting={gridFormatting}></Grid>
    </div>
  );
}

export default App;
