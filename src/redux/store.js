import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./reducer";

const store = configureStore({
  reducer: {
    user: userInfo,
  },
});

export default store;
