import React from "react";

const ItemDetails = ({ item, onClose, onDelete }) => {
    return (
        <div className="item-details">
            <h2>{item.itemName}</h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <img
                className="card-image"
                src={item.imageURL}
                alt={item.itemName}
            />
            <div className="detail-buttons">
                <button className="detail-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ItemDetails;
