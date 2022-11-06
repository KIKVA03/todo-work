import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counter";

const reduxStore = configureStore({
  reducer: { counter: counterSlice },
});
export default reduxStore;
