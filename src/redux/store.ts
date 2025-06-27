import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
