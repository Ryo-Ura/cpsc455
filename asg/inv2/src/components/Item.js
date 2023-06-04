import React from "react";
import { useDispatch } from "react-redux";
import { openItemDetails } from "../actions";
import '../style/card.css'
const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openItemDetails(item));
  };

  return (
    <div class="card" onClick={handleClick}>
      <h2 class="item-name">{item.itemName}</h2>
      <img src={item.image} alt={item.itemName} />
    </div>
  );
};

export default Item;
