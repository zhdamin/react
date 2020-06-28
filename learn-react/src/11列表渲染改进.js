import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props){
  return(
    <li>
      <h3>{props.index+1}:listItem:{props.data.title}</h3>
      <p>{props.data.content}</p>
    </li>
  )
}

class ListItem2 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li onClick={(e) => {this.clickEvent(
        this.props.index,
        this.props.data.title,
        e)}}>
        <h3>{this.props.index+1}:listItem:{this.props.data.title}</h3>
        <p>{this.props.data.content}</p>
      </li>
    )
  }
  clickEvent = ((index,title,event) => {
    alert((index+1)+'--'+title)
  })
}

class Welcome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list:[
        {
          title:'第一节react事件',
          content:'事件内容'
        },
        {
          title:'第二节react数据传递',
          content:'数据传递内容'
        },
        {
          title:'第二节条件渲染',
          content:'条件渲染内容'
        }
      ]
    }    
  }
  render(){
    let listArr = this.state.list.map((item,index) => {
      return (
        <ListItem2  key={index}  data={item} index={index}></ListItem2>      
        
      )
    })
    console.log(listArr)
    return(
      <div>
        <h1>
          今天课程内容
        </h1>
        <ul>
          {listArr}
          <li>
            <h3>这是标题</h3>
            <p>内容</p>
          </li>
        </ul>

        <h1>复杂没有用组件完成列表</h1>
        <ul>
        {
          this.state.list.map((item,index) => {
            return (
              <li key={index} onClick={(e => {this.clickFn(index,item.title,e)})}>
                <h3>{index+1}+{item.title}</h3>
                <p>{item.content}</p>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }

  clickFn = ((index,title,event) => {
    alert((index+1)+'-clickFn-'+title)    
  })
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
)
