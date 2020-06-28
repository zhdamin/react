import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

//函数式组件
function Childer(props){
  console.log(props)


  const title = <h2>副标题</h2>

  const weather = props.weather
  //条件判断
  const isGo = weather == '下雨'?"不出门":"出门"

  return(
    <div>
      <h1>函数式组件hello world</h1>
      {title}
      <div>
        是否出门？
        <span>{isGo}</span>
      </div>
    </div>
  )
}



//类组件
class Helloworld extends React.Component{
  render(){
    console.log(this)
    return(
      <div>
        <h1>类组件Hello World</h1>
        <h1>hello {this.props.name}</h1>
        <Childer weather={this.props.weather} />
      </div>
    )
  }
}

// ReactDOM.render(
//   <Childer weather='不下雨'/>,
//   document.getElementById("root")
// )

ReactDOM.render(
  <Helloworld name = '老陈' weather='下雨' />,
  document.getElementById("root")
)