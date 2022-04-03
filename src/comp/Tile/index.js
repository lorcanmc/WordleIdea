import React from "react";
import styles from "./tile.module.css";

export default function Tile({ letter, background }) {
  console.log(letter, background);
  return (
    <div
      className={styles.tile}
      style={{
        border: letter
          ? "2px rgb(144, 144, 144) solid"
          : "2px rgb(204, 204, 204) solid",
        backgroundColor: `${background}`,
      }}
    >
      <p className={styles.letter}>{letter}</p>
    </div>
  );
}
