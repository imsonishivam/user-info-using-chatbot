import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
};

const userInfo = createReducer(initialState, {
  // addName: (state, action) => {
  //   state.name = action.payload;
  // },
  // addAge: (state, action) => {
  //   state.age = action.payload;
  // },
  addData: (state, action) => {
    state.name = action.payload.name.value;
    state.age = action.payload.age.value;
  },
});

export default userInfo;
