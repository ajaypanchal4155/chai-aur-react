import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';

function App(){
  const [Counter,setCounter]= useState(15);

 // let Counter = 15 
  const addvalue = () => {
    console.log("clicked",Counter);
    //Counter = Counter + 1
    setCounter(PrevCounter => PrevCounter + 1);
    setCounter(PrevCounter => PrevCounter + 1);
    setCounter(PrevCounter => PrevCounter + 1);
    setCounter(PrevCounter => PrevCounter + 1);
  }
   //let Counter = 15
  const Removevalue = () => {
    console.log("clicked",Counter)
    setCounter(Counter - 1)
  }


  
return(
  <>
  <h1> Chai aur react</h1>
  <h2>Counter value:{Counter}</h2>
  <button onClick = {addvalue}>Add Value</button>
  <button onClick = {Removevalue}>remove value</button>
  <button>remove value:{Counter}</button>
  <p>footer:{Counter}</p>
  </>
)
}
export default App;
