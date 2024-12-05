import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";
import favSlice from "./favSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    bag: bagSlice,
    fav: favSlice,
    user: UserSlice
  },
});

export default store;
