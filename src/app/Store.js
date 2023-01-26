import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/Tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice
  }
  
})
