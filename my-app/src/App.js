import React from 'react';
// import logo from './logo.svg';
// import ReactDOM from 'react-dom';
import './App.css';
import { render } from 'react-dom';
import Login from './Login/Login'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//     </div>
//   );
// }

// const name = 'Josh Perez';
// const element = <h1>Hello,{name}</h1>;

// class App extends React.Component{
//   return (){
//     element
//     document.getElementById('root')
//   }
// }


// const Element = () => <App name = 'Josh Perez' />

// function App(props){
//   return <h1>Hello,{props.name}</h1>
// }



// function App(){
//   return (
//     <div>
//       <Welcome name = 'Josh Perez' />
//       <Welcome name = 'xxxxx' />
//     </div>
//   );
// }

// function Welcome(props){
//   return <h1>Hello,{props.name}</h1>
// }


// function formaName(user){
//   return user.firstName + ' ' +user.lastName;
// }

// const user = {
//   firstName: 'aaa',
//   lastName:'bbb'
// };

// function App(){
//   return <h1> Hello,{formaName(user)} </h1>
// }




// function App(){
//   if(user){
//   return <h1>hello,{formaName(user)}</h1>
//   }
//   return <h1>hello,ccc</h1>
// }


// function Clock(props){
//   return (
//     <div>
//       <h1>Hello,world</h1>
//       <h2>it is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

   //计时器

// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {date:new Date()   //包含当前时间的对象来初始化this.state
//     }
//   }

//   componentDidMount(){
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }
//   componentWillMount(){
//     clearInterval(this.timerID)
//   }

//   tick(){
//     this.setState({
//       date:new Date()
//     });
//   }

//   render(){
//     return (
//           <div>
//             <h1>Hello,world</h1>
//             <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
//           </div>
//         );
//   }
// }

// function App(){
//   return (
//     <div>
//       <Clock />,
//       <Clock />,
//       <Clock />
//     </div>
//   )
// }
// setInterval(App,1000)


// function ActionLink(){
//   function handleClick(e){
//       e.preventDefault();
//       console.log('the link was clicked');
//   }
// }

// function App(){
//   return(
//     <a href="#" onClick={handleClick}>Click me</a>
// )
// }


//事件处理，用户开关


// class Toggle extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {isToggleOn:true}

//     //为了在回调中使用this，这个绑定是必不可少的
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.setState(state => ({
//       isToggleOn:!state.isToggleOn
//     }));
//   }

//   render(){
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn? 'ON':'OFF'}
//       </button>
//     )
//   }
// }

// function App(){
//   return <Toggle />
// }



//条件渲染

//判断谁登录
// function UserGreeting(props){
//   return <h1>aaaa</h1>
// }

// function GuestGreeting(props){
//   return <h1>bbbbbb</h1>
// }


// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreeting />
//   }
//   return <GuestGreeting />
// }

// function App(){
//   return <Greeting isLoggedIn={false}/>
// }


//登录注销

// function LoginButton(props){
//   return (
//     <button onClick={props.onClick}>Login</button>
//   )
// }

// function LogoutButton(props){
//   return(
//     <button onClick={props.onClick}>Logout</button>
//   )
// }

// function UserGreeting(props){
//   return <h1>aaaa</h1>
// }

// function GuestGreeting(props){
//   return <h1>bbbbbb</h1>
// }

// class LoginControl extends React.Component{
//   constructor(props){
//   super(props);
//   this.handleLoginClick = this.handleLoginClick.bind(this);
//   this.handleLogoutClick = this.handleLogoutClick.bind(this);
//   this.state = {isLoggedIn:false}
//   }

//   handleLoginClick(){
//     this.setState({isLoggedIn:true});
//   }

//   handleLogoutClick(){
//     this.setState({isLoggedIn:false});
//   }

//   render(){
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn){
//       button = <LogoutButton onClick={this.handleLogoutClick} />
//     }else{
//       button = <LoginButton onClick={this.handleLoginClick} />
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}/>
//         {button}
//       </div>
//     )
//   }
// }

// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreeting />
//   }
//   return <GuestGreeting />
// }

// function App(){
//   return <LoginControl />
// }


  //条件渲染

  // function Mailbox(props){
  //   const unreadMessages = props.unreadMessages;

  //   return(
  //     <div>
  //       <h1>Hello</h1>
  //         {unreadMessages.length > 0 && 
  //         <h2>
  //            you have {unreadMessages.length} unread messages.
  //         </h2>
  //         }
  //     </div>
  //   );
  // }

  // const messages = ['React', 'Re:React','Re:Re:React'];

  // function App(){
  //   return(
  //     <Mailbox unreadMessages={messages} />
  //   )
  // }


  //组织组件渲染

  // function WarningBanner(props){
  //   if(!props.warn){
  //     return null;
  //   }

  //   return(
  //     <div className="warning">
  //       Warning
  //     </div>
  //   );
  // }


  // class Page extends React.Component{
  //   constructor(props){
  //     super(props);
  //     this.state = {showWarning:true};
  //     this.handleToggleClick = this.handleToggleClick.bind(this);
  //   }

  //   handleToggleClick(){
  //     this.setState(state => ({
  //       showWarning:!state.showWarning
  //     }));
  //   }

  //   render(){
  //     return(
  //       <div>
  //         <WarningBanner warn={this.state.showWarning} />
  //         <button onClick={this.handleToggleClick}>
  //           {this.state.showWarning ? 'Hide' : 'Show'}
  //         </button>
  //       </div>
  //     )
  //   }
  // }

  // function App(){
  //   return (
  //     <Page />
  //   )
  // }


  function App() {
    return (<Login />)
  }


  const Element = () => <App />

  export default Element;