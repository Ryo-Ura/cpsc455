import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      itemName,
      description,
      price,
      image,
    };

    // Dispatch the addItem action to add the new item to the list
    dispatch(addItem(newItem));

    // Clear the form inputs
    setItemName("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(event) => setItemName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <button type="submit">Add Item</button>
      <button
        type="button"
        onClick={() => {
          // Clear the form inputs when the "Clear" button is clicked
          setItemName("");
          setDescription("");
          setPrice("");
          setImage("");
        }}
      >
        Clear
      </button>
    </form>
  );
};

export default Form;
