import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    item: [],
    userData: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.item.push(action.payload);
    },
    userDetails: (state, action) => {
      state.userData.push(action.payload);
    },
  },
});

export const { addUser, userDetails } = UserSlice.actions;
export default UserSlice.reducer;
