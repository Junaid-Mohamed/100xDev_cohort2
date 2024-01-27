import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{backgroundColor:"red"}}>Hi1</div>
      <div style={{backgroundColor:"blue"}}>Hi2</div>
      <div style={{backgroundColor:"green"}}>Hi3</div>
    </div>

    <div className='flex'>
      <div style={{color:"white",backgroundColor:"red",width:"40%"}}>Hi1</div>
      <div style={{backgroundColor:"blue",width:"40%"}}>Hi2</div>
      <div style={{backgroundColor:"green",width:"20%"}}>Hi3</div>
    </div>
    </>
  )
}

export default App
