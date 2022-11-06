import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, actionsValue: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    increaseActionsValue: (state) => {
      state.actionsValue += 1;
    },
  },
});

export const { increment, decrement, reset, increaseActionsValue } = counterSlice.actions;

export default counterSlice.reducer;
