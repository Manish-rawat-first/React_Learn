import { useState } from 'react'//  Hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(15);
  //let counter = 0
  function addValue(){
    if(counter>19){
      counter = 19;
    }
    counter+=1;
    setCounter(counter)
  }
  function decValue(){
    if(counter<1){
      counter = 1;
    }
    counter-=1;
    setCounter(counter)
  }

  return (
    <>
    <h1>Chai aur Code</h1>
    <h2>Counter Value {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={decValue}>Decrease Value {counter}</button>
 
    </>
  )
}

export default App
