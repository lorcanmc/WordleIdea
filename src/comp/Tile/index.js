import React from "react";
import styles from "./tile.module.css";

export default function Tile({ tileFormatting }) {
  // console.log(tileFormatting);
  return (
    <div
      className={styles.tile}
      style={{
        border: `2px ${tileFormatting.borderColor} solid`,
        backgroundColor: `${tileFormatting.backgroundColor}`,
      }}
    >
      <p
        className={styles.letter}
        style={{
          color: `${tileFormatting.color}`,
        }}
      >
        {tileFormatting.letter}
      </p>
    </div>
  );
}
