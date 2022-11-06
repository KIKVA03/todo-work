import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counter";
// import logger from "redux-logger";
import customLogger from "./middlewares/customLogger";
import actionCounter from "./middlewares/actionCounter";

const reduxStore = configureStore({
  reducer: { counter: counterSlice },
  middleware: [customLogger, actionCounter],
});

export default reduxStore;
