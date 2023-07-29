import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import "../style/itemList.css";
import { getItemsAsync } from "../redux/items/thunks";

const ItemList = () => {
    const [filter, setFilter] = useState("");
    const items = useSelector((state) => state.items.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsAsync());
    }, []);
    
    const handleFilter = () => {
        dispatch(getItemsAsync({ filter }));
    };

    return (
        <div>
            <h2>Item List</h2>
            <div id="item-list">
                <div>
                    <input
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        placeholder="Filter"
                    />
                    <button onClick={handleFilter}>Filter</button>
                </div>
                {items.map((item) => (
                    <Item
                        key={uuidv4()}
                        id={item._id}
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
