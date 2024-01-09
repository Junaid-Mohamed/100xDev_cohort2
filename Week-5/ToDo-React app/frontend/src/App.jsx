import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([{}]);
  // incorrect way of doing this.
  useEffect(()=>{
 fetch("http://localhost:3001/todos")
   .then((res) => res.json())
   .then((json) => setTodos(json));
  },[])
 

  return (
    <div>
      <h1>ToDo Application</h1>
      <CreateTodo></CreateTodo>
      {todos.map((todo) => (
        <Todos
          key={todo._id}
          title={todo.title}
          description={todo.description}
        ></Todos>
      ))}
    </div>
  );
}

export default App;
