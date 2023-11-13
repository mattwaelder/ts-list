import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import ListComponent from "./ListComponent";

function App() {
  const [list, setList] = useState(["apples", "bananas"]);
  const [curr, setCurr] = useState("");

  const handleChange = (val: string): void => {
    setCurr(val);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    let listCopy = [...list];
    listCopy.push(curr);
    setList(listCopy);
    setCurr("");
  };

  return (
    <div className="App">
      <Input
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        curr={curr}
      />
      <ListComponent list={list} />
    </div>
  );
}

export default App;
