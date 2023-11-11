import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 0
  function addValue(){
    counter+=1;
    console.log(counter);
  }
  function decValue(){
    counter-=1;
    console.log(counter);
  }

  return (
    <>
    <h1>Chai aur Code</h1>
    <h2>Counter Value</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={decValue}>Decrease Value {counter}</button>
 
    </>
  )
}

export default App
