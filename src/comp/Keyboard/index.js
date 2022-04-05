import React from 'react'
import KeyboardLetter from '../KeyboardLetter'

export default function Keyboard({ handler }) {
  return (
    <div className='keyboard'>
        <div className='keyboardrow'>
            <KeyboardLetter text="Q" handler={handler} />
            <KeyboardLetter text="W" handler={handler} />
            <KeyboardLetter text="E" handler={handler} />
            <KeyboardLetter text="R" handler={handler} />
            <KeyboardLetter text="T" handler={handler} />
            <KeyboardLetter text="Y" handler={handler} />
            <KeyboardLetter text="U" handler={handler} />
            <KeyboardLetter text="I" handler={handler} />
            <KeyboardLetter text="O" handler={handler} />
            <KeyboardLetter text="P" handler={handler} />
        </div>
        <div className='keyboardrow'>
            <KeyboardLetter text="A" handler={handler} />
            <KeyboardLetter text="S" handler={handler} />
            <KeyboardLetter text="D" handler={handler} />
            <KeyboardLetter text="F" handler={handler} />
            <KeyboardLetter text="G" handler={handler} />
            <KeyboardLetter text="H" handler={handler} />
            <KeyboardLetter text="J" handler={handler} />
            <KeyboardLetter text="K" handler={handler} />
            <KeyboardLetter text="L" handler={handler} />
        </div>
        <div className='keyboardrow'>
            <KeyboardLetter text="ENTER" handler={handler} />
            <KeyboardLetter text="Z" handler={handler} />
            <KeyboardLetter text="X" handler={handler} />
            <KeyboardLetter text="C" handler={handler} />
            <KeyboardLetter text="V" handler={handler} />
            <KeyboardLetter text="B" handler={handler} />
            <KeyboardLetter text="N" handler={handler} />
            <KeyboardLetter text="M" handler={handler} />
            <KeyboardLetter text="BACK" handler={handler} />
        </div>
    </div>
  )
}
