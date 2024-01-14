import { Fragment, useEffect, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("rerender happened");
  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setExchangeData({ returns: 100 });
    }, 2000);
  }, []);

  function handleClick() {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  }

  function handleChange(e) {
    setInputvalue(e.target.value);
  }

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return <div>Hi There, your income tax return are {incomeTax}</div>;
}

export default App;
