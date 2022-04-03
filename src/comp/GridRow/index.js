import React from 'react'
import Tile from '../Tile'

export default function GridRow({ text,  backgroundColor }) {

    //SET BORDER TO NONE
    //SET COLOR TO WHITE

  return (
    <div className='gridrow'>
        <Tile letter={text[0]} background={backgroundColor[0]} ></Tile>
        <Tile letter={text[1]} background={backgroundColor[1]} ></Tile>
        <Tile letter={text[2]} background={backgroundColor[2]} ></Tile>
        <Tile letter={text[3]} background={backgroundColor[3]} ></Tile>
        <Tile letter={text[4]} background={backgroundColor[4]} ></Tile>
    </div>
  )
}
