import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component{
  constructor(props){
    super(props)
    //状态
    //构造函数初始化数据，将需要改变的数据初始化到state中
    this.state = {
      time:new Date().toLocaleTimeString()
    }
  }

  render(){
    // this.state.time = new Date().toLocaleTimeString();
    return(
      <div>
        <h1>当前时间：{this.state.time}</h1>
      </div>
    )
  }

  //生命周期函数,组件渲染完成时的函数
  componentDidMount(){
    setInterval(() => {
      console.log(this.state.time)
      // this.state.time = new Date().toLocaleTimeString()
      //切勿直接修改state数据，直接state重新渲染内容，需要使用setState
      this.setState({
        time:new Date().toLocaleTimeString()
      })
    },1000)
  }
}
  

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)