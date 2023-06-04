import { combineReducers } from "redux";
import { itemListReducer, selectedItemReducer } from "./itemListReducer";
// const initialItemsState = require("../initialItem.json")

// const itemsReducer = (state = initialItemsState, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       const newItem = {
//         id: state.length + 1,
//         ...action.payload,
//       };
//       return [...state, newItem];
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  itemList: itemListReducer,
  selectedItem: selectedItemReducer,
});

export default rootReducer;
