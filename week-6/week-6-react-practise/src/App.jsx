import { Fragment, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function updateTitle() {
    setTitle(`My Name is ${Math.floor(Math.random() * 100)}`);
  }
  const [title, setTitle] = useState("header1");
  return (
    <div>
      <button onClick={updateTitle}>click me to update the header</button>
      <Header title={title}></Header>
      <Header title="header2"></Header>
      <Header title="header3"></Header>
      <Header title="header4"></Header>
      <Header title="header5"></Header>
      <Header title="header6"></Header>
    </div>
  );
}

function HeaderWithButton() {
  function updateTitle() {
    setTitle(`My Name is ${Math.floor(Math.random() * 100)}`);
  }
  const [title, setTitle] = useState("header1");
  return (
    <div>
      <button onClick={updateTitle}>click me to update the header</button>
      <Header title={title}></Header>
      <Header title={title}></Header>
      <Header title={title}></Header>
      <Header title={title}></Header>
    </div>
  );
}

const Header = React.memo(function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
});

export default App;
