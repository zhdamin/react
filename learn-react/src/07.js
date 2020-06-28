import React from 'react';
import ReactDOM from 'react-dom';
import './Tab.css'


class Tab extends React.Component{
  constructor(props){
    super(props)

    //设置状态、数据
    this.state = {
      c1:'content active',
      c2:'content'
    }
    this.clickEvent = this.clickEvent.bind(this)
  }

 

  clickEvent(e){
    console.log('clickEvent')
    console.log(e.target.detaset.index)
    const index = e.target.detaset.index
    console.log(this)
    if(index == '1'){
      this.setState({
        c1:'content active',
        c2:'content'
      })
    }else{
      this.setState({
        c1:'content',
        c2:'content active'
      })
    }
  }

  render(){
    return (
      <div>
        <button data-index="1" onClick={this.clickEvent}>
          内容1
        </button>
        <button data-index="2" onClick={this.clickEvent}>
          内容2
        </button>
        <div className={this.state.c1}>
          内容1
        </div>
        <div className={this.state.c2}>
          内容2
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Tab />,
  document.querySelector("#root")
)
