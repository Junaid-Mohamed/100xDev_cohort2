import { Fragment, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <CardComponent innerComponent={<TextComponent />} />;
    </div>
  );
}

function TextComponent() {
  return <div>Hi There!</div>;
}

function CardComponent({ innerComponent }) {
  // console.log();
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      {innerComponent}
    </div>
  );
}

export default App;
