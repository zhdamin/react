import React from 'react';
import ReactDOM from 'react-dom';

function UserGreet(props){
  return(<h1>欢迎登录</h1>)
}

function UserLogin(prop){
  return(<h1>请先登录</h1>)
}


class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLogin: false
    }
  }
  render(){
    if(this.state.isLogin){
      return (<UserGreet />)
    }else{
      return (<UserLogin />)
    }
  }
}

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
  )