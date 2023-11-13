import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import ListComponent from "./ListComponent";

function App() {
  const [list, setList] = useState(["apples", "romaine", "tooth paste"]);
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

  const handleDel = (index: number): void => {
    console.log("delete index", index, ": ", list[index]);
    let listCopy = [...list];
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "15vh",
      }}
    >
      <Input
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        curr={curr}
      />
      <ListComponent list={list} handleDel={handleDel} />
    </div>
  );
}

export default App;
