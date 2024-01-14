import {
  Fragment,
  memo,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
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

  // useCallback is not about minimising the amount of code that is run, but useMemo is.
  // useCallback is not about rendering a child component, if the function hasn't/doesn't need to change across renders

  const calculateCryptoReturns = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  // for useCallback , useMemo dependency array cannot be empty.
  return (
    <div>
      <CryptoReturnsCalculator
        calculateCryptoReturns={calculateCryptoReturns}
      />
    </div>
  );
}
// memo lets the component to render only the props passed to it changes.
// but even though here the function doesn't change or the data in the function doesn't change.
// this component rerenders because the reference of the function changes.
// pass by reference changes and the component rerenders to avoid this we use useCallback
// simple explaination.
const CryptoReturnsCalculator = memo(({ calculateCryptoReturns }) => {
  console.log("child component rendered");
  return <div>Your crypto return are {calculateCryptoReturns()}</div>;
});

export default App;
