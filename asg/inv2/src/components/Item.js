import React from "react";
import ItemDetails from "./ItemDetails";
import { deleteItem } from "../actions";
import { useDispatch } from "react-redux";
import '../style/card.css'

const Item = (props) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setShowDetails(!showDetails);
  };
  const onDelete = (props) => {
    dispatch(deleteItem(props));
  };
  console.log(props)

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="item-name">{props.itemName}</h2>
        <img
          className="card-image"
          src={props.imageURL}
          alt={props.itemName}
          onClick={handleClick}
        />
        {showDetails && (
          <div className="item-details-overlay">
            <ItemDetails item={props} onClose={handleClick} />
          </div>
        )}
        <button className="delete-button" onClick={() => onDelete(props)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;