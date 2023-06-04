import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import "../style/form.css"

const Form = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an item object from the form inputs
    const newItem = {
      itemName,
      description,
      price,
      image,
    };
    console.log(newItem)

    // Dispatch the addItem action with the new item
    dispatch(addItem(newItem));

    // Reset the form inputs
    setItemName("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form id="itemForm" onSubmit={handleSubmit}>
        <div class="form-row">
          <label for="itemName">Item Name:</label>
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div class="form-row">
          <label for="description">Description:</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-row">
          <label for="price">Price:</label>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="form-row">
          <label for="imageURL">Image URL:</label>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Form;
