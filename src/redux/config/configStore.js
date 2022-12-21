import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
