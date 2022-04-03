import React from 'react'
import GridRow from '../GridRow'

export default function Grid({ currentRow, currentGuess, backgroundColor }) {


  return (
    <div className='grid'>
        <GridRow text={currentGuess} backgroundColor={backgroundColor}></GridRow>
        {/* <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow> */}
    </div>
  )
}
