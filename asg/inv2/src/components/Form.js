import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import "../style/form.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageURL, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Create an item object from the form inputs
        const newItem = {
            itemName,
            description,
            price,
            imageURL,
            id: uuidv4(),
        };
        console.log(newItem);

        // Dispatch the addItem action with the new item
        dispatch(addItem(newItem));
    };

    const onClear = (e) => {
        e.preventDefault();
        setItemName("");
        setDescription("");
        setPrice("");
        setImage("");
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2 className="form-title">Add Item</h2>
                <form id="itemForm" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="itemName">Item Name:</label>
                        <input
                            type="text"
                            required
                            placeholder="Item Name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            required
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            required
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="imageURL">Image URL:</label>
                        <input
                            type="text"
                            required
                            placeholder="Image URL"
                            value={imageURL}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <button className="submit-button" type="submit">
                        Add Item
                    </button>
                    <button className="submit-button" onClick={onClear}>
                        Clear
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
