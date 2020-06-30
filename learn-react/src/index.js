import React from 'react';
import ReactDOM from 'react-dom';
import Redux,{createStore} from 'redux'


const reduce = function(state={num:0},action){
  switch(action.type){
    case "add":
      state.num++;
      break;
    case "decrement":
      state.num--;
      break;
  }
  return {...state}
}

const store = createStore(reduce)
console.log(store)

function add(){
  //通过仓库的方法dispatch进行修改数数据
  store.dispatch({type:"add"})
}

function decrement(){
  //通过仓库的方法dispatch进行修改数数据
  store.dispatch({type:"decrement"})
}

//函数式计数器
const Counter = function(props){
  return(
    <div>
      <h1>计数数量：{store.getState()}</h1>

      <button onClick={add}>计数+1</button>
      <button onClick={decrement}>计数-1</button>
    </div>
  )
}



ReactDOM.render(
  <Counter></Counter>,
  document.getElementById('root')
  )


