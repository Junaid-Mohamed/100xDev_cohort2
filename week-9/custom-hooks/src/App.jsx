import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import useSWR from "swr";


// const useIsOnline = ()=>{

//   const [online,setOnline] = useState(window.navigator.onLine);
  
//   const handleOnine = () =>{
//     setOnline(!window.navigator.onLine);
//   }
//   useEffect(()=>{
    
//     window.addEventListener("online",handleOnine)
//     window.addEventListener("offline",handleOnine)
//     return ()=>{
//       window.removeEventListener("online",handleOnine);
//       window.removeEventListener("offline",handleOnine);
//     }
//   },[])
//    return online;
// }

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

const useInterval = (cb,timer)=>{
 
  useEffect(()=>{
    const clock = setInterval(()=>{
      cb()
      console.log("component mounted.")
    },timer)
    // cb()
    return () =>{
      console.log("unmounted");
      clearInterval(clock);
    };
  },[cb,timer])

}

// const useInterval = (callback, delay) => {
//   useEffect(() => {
//     const intervalId = setInterval(()=>{
//       callback();
//     console.log("mounted")}, delay);

//     return () => {clearInterval(intervalId);
//     console.log("unmounted.")};
//   }, [callback, delay]);
// };

const useBebounced = (value,timeout) =>{

}


function App() {

  const [count,setCount] = useState(0);
  
  useInterval(()=>{
    setCount((count)=>count+1)
  },1000)
    
    return <div>  The timer is {count}</div>  

}

export default App


