import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { AdDesigner } from "./AdDesigner";
import { Vote } from "./VoteHere";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main">
        <AdDesigner></AdDesigner>
        <Vote></Vote>
      </div>
    </div>
  );
}

export default App;
