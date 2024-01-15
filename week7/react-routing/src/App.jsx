import React, { useContext, useState } from "react";

import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("count rendered");
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom); // only count state variable
  // const [count1, setCount] = useRecoilState(countAtom); // same as useState gives value and update function for that value.
  //  use only what is required. performant sawaal aata hai if you take both and you want only one in your component.
  return <div>{count}</div>;
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
