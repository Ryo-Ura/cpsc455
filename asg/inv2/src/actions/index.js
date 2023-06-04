export const addItem = item => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItem = item => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

export const openItemDetails = (item) => {
  return {
    type: "OPEN_ITEM_DETAILS",
    payload: item,
  };
};