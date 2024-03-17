/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // redux say dont mutate store directly
      state.push(action.payload);
    },
    remove(state, action) {
      return (state = state.filter((item) => item.id !== action.payload));
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

//thunks
