import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
  

    <div className='grid grid-cols-10'>
      <div className='bg-red-500 col-span-4' >Hi1</div>
      <div className='bg-yellow-500 col-span-4' >Hi2</div>
      <div className='bg-green-500 col-span-2'>Hi3</div>
      <div className='bg-red-500 col-span-4' >Hi3</div>
      <div className='bg-yellow-500 col-span-4' >Hi4</div>
      <div className='bg-green-500 col-span-4'>Hi5</div>
    </div>
    </>
  )
}

export default App
