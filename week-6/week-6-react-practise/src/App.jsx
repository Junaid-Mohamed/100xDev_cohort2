import { Fragment, useEffect, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputvalue] = useState(1);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    let count = 0;
    for (let i = 0; i <= inputValue; i++) {
      count += i;
    }
  }, [inputValue]);

  function handleClick() {
    setCounter(counter + 1);
  }

  function handleChange(e) {
    setInputvalue(e.target.value);
  }

  return (
    <div style={{ margin: "8px" }}>
      <input style={{ margin: "8px" }} onChange={handleChange} type="number" />
      <br />
      Sum from 1 to {inputValue} is {}
      <br />
      <button style={{ margin: "8px" }} onClick={handleClick}>
        Count {counter}
      </button>
    </div>
  );
}

function Todo({ id }) {
  // do a network call.

  return <div>this is todo with id {id}</div>;
}

export default App;
