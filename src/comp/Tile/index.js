import React from 'react'
import styles from "./tile.module.css"

export default function Tile({ letter }) {
  return (
    <div className={styles.tile}>
        <p className={styles.letter}>{letter}</p>
    </div>
  )
}
