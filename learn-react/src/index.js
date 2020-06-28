import React from 'react';
import ReactDOM, { render } from 'react-dom';

class ComLife extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mes:'hello'
    }
    console.log('constructor构造函数')
  }
  componentWillMount(){
    console.log('componentWillMount将要渲染')
  }
  componentDidMount(){
    console.log('componentDidMount组件渲染完毕')
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps组件将要接受新的状态')
  }
  shouldComponentUpdate(){
    //如果希望更新，就返回为真，不希望更新就返回false
    console.log(this.state.mes)
    console.log('进行判断是否要更新内容')
    if(this.state.mes === 'hello'){
      return true
    } else{
      return false
    }
  }
  componentWillUpdate(){
    console.log('componentWillUpdate组件将要更新')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate组件更新完毕')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount移除')
  }
  render(){
    console.log('render渲染函数')
    return(
      <div>
        <h1>
          {this.state.mes}
        </h1>
        <button onClick={this.changeMsg}>组件更新</button>
      </div>
    )
  }

  changeMsg = ()=>{
    this.setState({
      mes:'yayayyaya'
    })
  }
}

class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isShow:true
    }
  }
  render(){
    if(this.state.isShow){
      return (
        <div>
          <button onClick={this.removeCom}>移除comlife</button>,
          <ComLife />
        </div>
      )
    }else{
      return <h1>将comlife移除</h1>
    }
  } 

  removeCom = () => {
    this.setState({
      isShow:false
    })
  }
}


ReactDOM.render(
  <ParentCom />,
  document.querySelector('#root')
)