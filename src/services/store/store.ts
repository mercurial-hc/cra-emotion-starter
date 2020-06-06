import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { placeholder } from "./slices";

const store = configureStore({
  reducer: {
    placeholder,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
