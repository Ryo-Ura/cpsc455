import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import Service from "./service";

export const getItemsAsync = createAsyncThunk(
    actionTypes.GET_ITEMS,
    async (filter) => {
        return await Service.getItems(filter);
    }
);

export const addItemAsync = createAsyncThunk(
    actionTypes.ADD_ITEM,
    async (item) => {
        return await Service.addItem({ item });
    }
);

export const deleteItemAsync = createAsyncThunk(
    actionTypes.DELETE_ITEM,
    async (item, thunkApi) => {
        await Service.deleteItem({ item });
        return thunkApi.fulfillWithValue(item.id);
    }
);
