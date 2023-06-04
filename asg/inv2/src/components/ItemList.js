import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = () => {
  const items = useSelector((state) => state.itemList);

  return (
    <div id="item-list">
      <h2>Item List</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
