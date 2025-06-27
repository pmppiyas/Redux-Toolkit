import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/counter/counterSlice";
import loggerMiddleware from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    counter: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
