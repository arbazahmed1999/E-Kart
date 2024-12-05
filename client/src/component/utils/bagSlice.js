import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    item: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item.splice(action.payload, 1);
    },
    clearbag: (state) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem, clearbag } = bagSlice.actions;
export default bagSlice.reducer;
