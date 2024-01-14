import {
  Fragment,
  memo,
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(200);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 100;
    }, 3000);
  }, []);

  return (
    <div>
      Your number is <div ref={divRef}>{number}</div>
    </div>
  );
}

export default App;
