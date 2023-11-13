import React from "react";

type InputProps = {
  handleChange: any;
  handleSubmit: any;
  curr: string;
};

const Input = function ({ handleChange, handleSubmit, curr }: InputProps) {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{
        width: "200px",
        height: "2em",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <input
        type="text"
        placeholder="add item"
        id="input-text"
        value={curr}
        onChange={(e) => handleChange(e.target.value)}
        style={{ fontSize: "1.2em" }}
      ></input>
      <button
        onClick={(e) => handleSubmit(e)}
        style={{
          padding: "0 8px 0 8px",
          cursor: "pointer",
          fontSize: "1.2em",
          marginLeft: "5px",
        }}
      >
        +
      </button>
    </form>
  );
};

export default Input;
