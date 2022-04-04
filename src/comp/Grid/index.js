import React from 'react'
import GridRow from '../GridRow'

export default function Grid({ gridFormatting }) {

  return (
    <div className='grid'>
        <GridRow rowFormatting={gridFormatting[0]} ></GridRow>
        <GridRow rowFormatting={gridFormatting[1]} ></GridRow>
        
        {/* <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow>
        <GridRow text={currentGuess}></GridRow> */}
    </div>
  )
}
