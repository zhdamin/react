import React from 'react';
import './App.css';

//history模式/后端匹配使用
import {BrowserRouter as Route,Router, Link} from 'react-router-dom'

function Home(){
  return(
    <div>
      <h1>首页</h1>
    </div>
  )
}

function Me(){
  return(
    <div>
      <h1>个人中心</h1>
    </div>
  )
}

function Product(){
  return(
    <div>
      <h1>产品页面</h1>
    </div>
  )
}

class App extends React.Component{
  render(){
    return(
      <div id="app">
        <div>
          所有页面都显示的普通内容
        </div>

        <Router>
          <Route path="/" exact component={()=>(<div>首页</div>)}></Route>
          <Route path="/me" component={()=>(<div>me</div>)}></Route>
          <Route path="/product" component={()=>(<div>product</div>)}></Route>
        </Router>
        <Router basename="/admin">
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/me">个人中心</Link>
          </div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/me" component={Me}></Route>
        </Router>
      </div>
    )
  }
}


export default App;
