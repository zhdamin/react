import React from 'react'
import ReactDOM from 'react-dom'

const exampleStyle = {
    background:"skyblue",
    borderBottom:"1px solid red"
}

const element = (
    <div>
        <h1 style = {exampleStyle}>hello world</h1>
    </div>
)

ReactDOM.render(
    element,
    document.getElementById("root")
)