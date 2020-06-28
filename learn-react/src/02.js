import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

实现页面时刻的显示
function clock(){
  const time = new Date().toLocaleTimeString();
  const element = (
    <div>
      <h1>现在的时间是 {time} </h1>
    </div>
  )

  const root = document.querySelector('#root')
  ReactDOM.render(element,root)

  
}

clock()

setInterval(clock,1000)


react函数式组件
function Clock(props){
  return(
    <div>
      <h1>现在的时间{props.date.toLocaleTimeString()}</h1>
    </div>
  )
}


function run(){
  ReactDOM.render(
    <Clock date = {new Date()} />,
    document.querySelector('#root')
  )
}


setInterval(run,1000)

const time =new Date().toLocaleTimeString()

const str = '当前的时间是：'

const element = (
  <div>
    <h1>hello world</h1>
    <h2>{str + time}</h2>
  </div>
)

const man = "发热"

const element2 = (
  <div>
    <h1>今天是否隔离</h1>
    <h2>{man == "发热"? <button>隔离</button>:"居家"}</h2>
  </div>
)

const element4 = (
  <div>
    <span>aiya</span>
    <span>haha</span>
  </div>
)

const man = '正常'
const element3 = (
  <div>
    <h1>今天是否隔离</h1>
    <h2>{man == "发热"? <button>隔离</button>:element4}</h2>
  </div>
)

console.log(element3)

const color = 'bgRed'
const element5 = (
  <div className={color}>红色背景颜色</div>
)