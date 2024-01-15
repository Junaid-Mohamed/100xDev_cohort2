import React, { Component, useContext, useState } from "react";

import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/selectors/evenSelector";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
        <RenderEvenDiv />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  // console.log("count rendered");

  // console.log(count % 2 === 0);
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
  console.log("Button rendered");
  // const [count, setCount] = useRecoilState(countAtom);
  // if you use above this Component will get rendered but it is not needed, so using below sttax/ API avoid that re-render
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
}

function RenderEvenDiv() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "This is even." : ""}</div>;
}

export default App;
