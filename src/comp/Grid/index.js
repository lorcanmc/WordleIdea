import React from 'react'
import GridRow from '../GridRow'

export default function Grid({ currentRow, currentGuess }) {


  return (
    <div className='grid'>
        <GridRow text={currentGuess}></GridRow>
        {/* <GridRow></GridRow>
        <GridRow></GridRow>
        <GridRow></GridRow>
        <GridRow></GridRow>
        <GridRow></GridRow> */}
    </div>
  )
}
