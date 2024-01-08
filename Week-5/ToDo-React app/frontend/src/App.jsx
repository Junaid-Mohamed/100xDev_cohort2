import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "first todo",
      description: "This is first todo",
      completed: false,
    },
  ]);
  // incorrect way of doing this.

  // fetch("http://localhost:3001/todos").then(async (res) => {
  //   // console.log(res);
  //   console.log(res);
  //   const json = await res.json();
  //   console.log(json.todos);
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <h1>ToDo Application</h1>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
