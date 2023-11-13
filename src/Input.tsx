import React from "react";

type InputProps = {
  handleChange: any;
  handleSubmit: any;
  curr: string;
};

const Input = function ({ handleChange, handleSubmit, curr }: InputProps) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="add item"
        id="input-text"
        value={curr}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <button onClick={(e) => handleSubmit(e)}>+</button>
    </form>
  );
};

export default Input;
