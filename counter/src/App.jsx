import { useState } from "react";
import './App.css'

function App() {

  let [counter,setCount] =  useState(15)

  // let counter = 15;

  
    const Add = () =>{
      if(counter<20){
      counter = counter+1;
      }
      // console.log(counter);
      setCount(counter);
    }

    const Remove = () =>{
      if(counter>0){
      counter = counter-1;
      }
      // console.log(counter);
      setCount(counter);
    }

  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"red", textAlign:"center"}}>Counter runs between 0 to 20</h1>
      <h3>{counter}</h3>
      <button onClick={Add} style={{marginRight:"10px"}}>Add Value</button>
      <button onClick={Remove}>Subtract Value</button>
    </div>
  )
}

export default App
