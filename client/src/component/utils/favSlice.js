import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    item: [],
  },

  reducers: {
    addProduct: (state, action) => {
      state.item.push(action.payload);
      console.log(state.item);
    },
    removeItem: (state, action) => {
      state.item.splice(action.payload, 1);
    },
  },
});

export const { addProduct, removeItem } = favSlice.actions;
export default favSlice.reducer;
