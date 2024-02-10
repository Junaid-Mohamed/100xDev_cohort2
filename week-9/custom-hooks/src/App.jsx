import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [render,setRender] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setRender((render)=>!render)
    },3000)
  })
  return (
    <>
    <Mycomponent/>
    </>
  )
}

const Mycomponent = () =>{
  
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("component mounted");

    return ()=>{
      console.log("component unmounted")
    }
  },[count]);

  return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
      <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
    </div>
  )
}

export default App
