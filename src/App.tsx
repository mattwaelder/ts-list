import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import ListComponent from "./ListComponent";

function App() {
  //states
  const [list, setList] = useState(["apples", "romaine", "tooth paste"]);
  const [curr, setCurr] = useState("");

  //functions
  //controlled component handler
  const handleChange = (val: string): void => {
    setCurr(val);
  };

  //submit new item
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    let listCopy = [...list];
    listCopy.push(curr);
    setList(listCopy);
    //reset curr to clear text field and state
    setCurr("");
  };

  //remove list element based on index
  const handleDel = (index: number): void => {
    let listCopy = [...list];
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  //practicing inline styles, i hate it :)
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
