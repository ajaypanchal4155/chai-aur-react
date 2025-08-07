import React from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  //const [count, setCount] = useState(0)
  let myobj = {
   username: "hitesh",
   age: 21
  }
 //let newArr = [1,2,3]
  return (
    <>
      <h1 ClassName='bg-green-400 text-blackP-4 rounded-xl mb-4'>Tailwind test</h1>
      
    < Card username = "chaiaurcode" SomeObj = {myobj}/>
    < Card />
      </>
  )
}
export default App
