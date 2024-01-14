import { Fragment, useEffect, useMemo, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchang2eData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("rerender happened");
  useEffect(() => {
    setExchange1Data({ returns: 100 });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);
  useEffect(() => {
    setExchang2eData({ returns: 100 });
  }, []);

  function handleClick() {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  }

  function handleChange(e) {
    setInputvalue(e.target.value);
  }

  // learning the concept of useMemo,
  // after the bankdata is called rerender happens but cryptoreturn are already
  // calculated, so it should not be called again.
  // useEffect and useMemo if you look it is same, execution of particular codes happens when a dependency array changes
  // but useEffect doesn't return anything that's the difference
  const cryptoReturns = useMemo(() => {
    console.log("crypto return called");
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);
  console.log("crypto returns", cryptoReturns);
  const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  return <div>Hi There, your income tax return are {incomeTax}</div>;
}

export default App;
