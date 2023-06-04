import React from "react";

const ItemDetails = ({ item }) => {
  return (
    <div>
      <h2>Item Details</h2>
      <p>Item Name: {item.itemName}</p>
      <p>Description: {item.description}</p>
      <p>Price: ${item.price}</p>
      <img src={item.image} alt={item.itemName} />
    </div>
  );
};

export default ItemDetails;
