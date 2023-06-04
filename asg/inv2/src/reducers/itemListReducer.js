const initialItemsState = require("../initialItem.json");

const itemListReducer = (state = initialItemsState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state)
      // console.log(initialItemsState)
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};

// selectedItemReducer.js
const selectedItemReducer = (state = null, action) => {
  switch (action.type) {
    case "OPEN_ITEM_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export { itemListReducer, selectedItemReducer };
