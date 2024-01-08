import { Fragment, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "title1",
      description: "description1",
    },
    {
      id: 2,
      title: "title2",
      description: "description2",
    },
    {
      id: 3,
      title: "title3",
      description: "description3",
    },
  ]);
  // fetch("http://localhost:3001/todos")
  //   .then((res) => res.json())
  //   .then((json) => setTodos(json));
  return (
    <div>
      <h1>This is react app</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
