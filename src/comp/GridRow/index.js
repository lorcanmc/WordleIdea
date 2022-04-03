import React from 'react'
import Tile from '../Tile'

export default function GridRow({ text, dailyWord }) {



  return (
    <div className='gridrow'>
        <Tile letter={text[0]}></Tile>
        <Tile letter={text[1]}></Tile>
        <Tile letter={text[2]}></Tile>
        <Tile letter={text[3]}></Tile>
        <Tile letter={text[4]}></Tile>
    </div>
  )
}
