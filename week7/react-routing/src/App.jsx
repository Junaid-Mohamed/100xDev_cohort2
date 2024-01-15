import React, { useContext, useState } from "react";

import "./App.css";
import { CountContextObject } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContextObject.Provider value={{ count, setCount }}>
        <Count />
      </CountContextObject.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContextObject);
  return <div>{count}</div>;
}

function Button() {
  const { count, setCount } = useContext(CountContextObject);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
