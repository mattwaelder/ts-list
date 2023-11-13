import React from "react";
import ListElement from "./ListElement";

type ListComponentProps = {
  list: string[];
};

const ListComponent = function ({ list }: ListComponentProps) {
  return (
    <ul>
      {list.map((el: string, i) => (
        <ListElement item={el} key={i} />
      ))}
    </ul>
  );
};

export default ListComponent;
