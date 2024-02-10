import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(resp=>setTodos(resp.data.todos));

  },[])
  return (
    <>
   { todos.map((todo)=>(<Todos title={todo.title} desc={todo.description} />))}
    
    </>
  )
}

const Todos = ({title,desc}) =>{

  return(
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )

}



export default App



// const Mycomponent = () =>{
  
//   const [count,setCount] = useState(0);

//   useEffect(()=>{
//     console.log("component mounted");

//     return ()=>{
//       console.log("component unmounted")
//     }
//   },[count]);

//   return(
//     <div>
//       <h3>{count}</h3>
//       <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//       <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
//     </div>
//   )
// }