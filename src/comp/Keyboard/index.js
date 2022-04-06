import React from 'react'
import KeyboardLetter from '../KeyboardLetter'

export default function Keyboard({ handler, keyboardColors }) {
  return (
    <div className='keyboard'>
        <div className='keyboardrow'>
            <KeyboardLetter text="Q" handler={handler} backgroundColor={keyboardColors[16]}/>
            <KeyboardLetter text="W" handler={handler} backgroundColor={keyboardColors[22]}/>
            <KeyboardLetter text="E" handler={handler} backgroundColor={keyboardColors[4]}/>
            <KeyboardLetter text="R" handler={handler} backgroundColor={keyboardColors[17]}/>
            <KeyboardLetter text="T" handler={handler} backgroundColor={keyboardColors[19]}/>
            <KeyboardLetter text="Y" handler={handler} backgroundColor={keyboardColors[24]}/>
            <KeyboardLetter text="U" handler={handler} backgroundColor={keyboardColors[20]}/>
            <KeyboardLetter text="I" handler={handler} backgroundColor={keyboardColors[8]}/>
            <KeyboardLetter text="O" handler={handler} backgroundColor={keyboardColors[14]}/>
            <KeyboardLetter text="P" handler={handler} backgroundColor={keyboardColors[15]}/>
        </div>
        <div className='keyboardrow'>
            <KeyboardLetter text="A" handler={handler} backgroundColor={keyboardColors[0]} />
            <KeyboardLetter text="S" handler={handler} backgroundColor={keyboardColors[18]}/>
            <KeyboardLetter text="D" handler={handler} backgroundColor={keyboardColors[3]}/>
            <KeyboardLetter text="F" handler={handler} backgroundColor={keyboardColors[5]}/>
            <KeyboardLetter text="G" handler={handler} backgroundColor={keyboardColors[6]}/>
            <KeyboardLetter text="H" handler={handler} backgroundColor={keyboardColors[7]}/>
            <KeyboardLetter text="J" handler={handler} backgroundColor={keyboardColors[9]}/>
            <KeyboardLetter text="K" handler={handler} backgroundColor={keyboardColors[10]}/>
            <KeyboardLetter text="L" handler={handler} backgroundColor={keyboardColors[11]}/>
        </div>
        <div className='keyboardrow'>
            <KeyboardLetter text="ENT" handler={handler} backgroundColor="rgb(80, 171, 92)" />
            <KeyboardLetter text="Z" handler={handler} backgroundColor={keyboardColors[25]}/>
            <KeyboardLetter text="X" handler={handler} backgroundColor={keyboardColors[23]}/>
            <KeyboardLetter text="C" handler={handler} backgroundColor={keyboardColors[2]}/>
            <KeyboardLetter text="V" handler={handler} backgroundColor={keyboardColors[21]}/>
            <KeyboardLetter text="B" handler={handler} backgroundColor={keyboardColors[1]}/>
            <KeyboardLetter text="N" handler={handler} backgroundColor={keyboardColors[13]}/>
            <KeyboardLetter text="M" handler={handler} backgroundColor={keyboardColors[12]}/>
            <KeyboardLetter text="BCK" handler={handler} backgroundColor="rgb(220, 220, 220)" />
        </div>
    </div>
  )
}
