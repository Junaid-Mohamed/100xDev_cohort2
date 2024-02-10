import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";


const useTodos = (n) =>{
  const [todos,setTodos] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(resp=>{
        setTodos(resp.data.todos)
        setLoading(false)  
      });
    },n*1000)
     
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(resp=>{
        setTodos(resp.data.todos)
        setLoading(false)  
      });

  },[n]);

  return {todos,loading};
}

function App() {
  
  const {todos,loading} = useTodos(3);

  return (
    <>
   { loading?"Loading .....................":todos.map((todo)=>(<Todos title={todo.title} desc={todo.description} />))}
    
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