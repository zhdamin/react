import React from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'

function LoginInfo(props){
  // props.loginState = 'success'
  // props.loginState = 'fail'
  console.log(props)
  if(props.location.state.loginState === 'success'){
    return <Redirect to="/admin"></Redirect>
  }else{
    return <Redirect to="/login"></Redirect>
  }
}

let FormCom = () => {
  let pathObj = {
    pathname:"/loginInfo",
    state:{
      loginState:'success'
    }
  }
  return (
    <div>
      <h1>表单验证</h1>
      <Link to={pathObj}>登陆验证后页面</Link>
    </div>
  )
}

class App extends React.Component{
  render(){
    return(
      <div>
          <Router>
            <Route path="/" exact component={() => (<h1>首页</h1>)}></Route>
            <Route path="/form" exact component={FormCom}></Route>
            <Route path="/login" exact component={() => (<h1>登录页</h1>)}></Route>
            <Route path="/loginInfo" exact component={LoginInfo}></Route>
            <Route path="/admin" exact component={() => (<h1>admin页,登陆成功</h1>)}></Route>
          </Router>
      </div>
    )
  }
}


export default App;

