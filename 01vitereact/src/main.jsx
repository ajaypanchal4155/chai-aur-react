import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';
//import Chai from './Chai.jsx';

function myApp(){
  return(
    <div>
      <h1>custom App | chai</h1>
    </div>
  )
}

//const ReactElement = {
  //type:'a',
  //props:{
   // href:"https://google.com",
   // target:" _blank"
  //},
 // chidren:'click me to visit google'
//}

//const anotherElement = (
  //<a href = "https://google.com" target ="_blank" rel="noopener noreferrer">
    //<div>
    //visit google
    //</div>
  //</a>
//)
//const anotherUser = "chai aur react"
//const reactElement = React.createElement('a', 
//{href: "https://google.com", target:'_blank'},
 // 'click me to visit google',
 // anotherElement
//)
ReactDom.createRoot(document.getElementById('root')).render(
    myApp()  );
