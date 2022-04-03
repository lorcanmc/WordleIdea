import React from 'react'
import GridRow from '../GridRow'

export default function Grid({ currentRow, currentGuess, dailyWord }) {


  return (
    <div className='grid'>
        <GridRow text={currentGuess} dailyWord={dailyWord}></GridRow>
        {/* <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow> */}
    </div>
  )
}
