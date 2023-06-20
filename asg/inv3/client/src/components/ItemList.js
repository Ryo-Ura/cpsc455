import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item"
import "../style/itemList.css";
import { getItemsAsync } from "../redux/items/thunks";

const ItemList = () => {
    const items = useSelector(state => state.items.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItemsAsync());
    }, []);

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
