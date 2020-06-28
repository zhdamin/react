import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './04style.css'


const exampleStyle = {
    background:"skyblue",
    borderBottom:"1px solid red",
    'background-image':"url(https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png);"
  }
  
  const element = (
    <div>
        <h1 style = {exampleStyle}>hello world</h1>
    </div>
  )
  
  const classStr = "redBg"
  const element2 = (
    <div>
      <h1 className={"abc "+classStr}>hello world</h1>
    </div>
  )
  
  
  const classStr2 = ['abc2','redBg2'].join(' ')
  const element3 = (
    <div>
      {/**这里写注释 */}
      <h1 className={classStr2} style={exampleStyle}>hello world</h1>
    </div>
  )
  