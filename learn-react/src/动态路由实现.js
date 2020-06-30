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

function Me(props){
  console.log(props)
  return(
    <div>
      <h1>个人中心</h1>
    </div>
  )
}

function News(props){
  console.log(props)
  return(
    <div>
      新闻页，新闻id：{props.match.params.id}
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
    let meObj = {
      pathname:"/me",  //跳转的路径
      search:"?username=admin",//get请求的参数
      hash:"#abc",//设置的HASH值
      state:{msg:"hello"}//传入组件数据
    };
    return(
      <div id="app">
        
        <Router>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to={meObj} replace>个人中心</Link>
            <Link to="/news/456789">新闻</Link>
          </div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/me" component={Me}></Route>
          <Route path="/news/:id" component={News}></Route>
        </Router>
      </div>
    )
  }
}


export default App;
