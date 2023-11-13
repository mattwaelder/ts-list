import React from "react";

type ListElementProps = {
  item: string;
  index: number;
  handleDel: any;
};

const ListElement = function ({ item, index, handleDel }: ListElementProps) {
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "1.2em",
        fontWeight: "300",
        paddingTop: "0px",
      }}
    >
      <div style={{}}>{item}</div>
      <div
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => handleDel(index)}
      >
        x
      </div>
    </div>
  );
};

export default ListElement;
