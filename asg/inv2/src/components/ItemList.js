import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "../style/itemList.css";

const ItemList = () => {
    const items = useSelector((state) => state.itemList);
    return (
        <div>
            <h2>Item List</h2>
            <div id="item-list">
                {items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        itemName={item.itemName}
                        imageURL={item.imageURL}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
