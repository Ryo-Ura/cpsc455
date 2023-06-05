const initialItemsState = require("../initialItem.json");

const itemListReducer = (state = initialItemsState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // let action.payload.id = Date.now()
      const newItems = [...state, action.payload]
      return newItems;
    case "DELETE_ITEM":
      // console.log(state.id)
      console.log(action.payload);
      const updatedItems = state.filter(item => item.id !== action.payload.id);
      return updatedItems;
    default:
      return state;
  }
};


export { itemListReducer };
