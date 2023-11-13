import React from "react";
import ListElement from "./ListElement";

type ListComponentProps = {
  list: string[];
  handleDel: any;
};

const ListComponent = function ({ list, handleDel }: ListComponentProps) {
  return (
    <ul
      style={{
        width: "250px",
        height: "auto",
        fontSize: "1.5em",
        textAlign: "left",
        paddingLeft: "0",
      }}
    >
      {list.map((el: string, i) => (
        <li key={i}>
          <ListElement item={el} index={i} handleDel={handleDel} />
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
