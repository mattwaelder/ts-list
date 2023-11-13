import React from "react";

type ListElementProps = {
  item: string;
};

const ListElement = function ({ item }: ListElementProps) {
  return <li>{item}</li>;
};

export default ListElement;
