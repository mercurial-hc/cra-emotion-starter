import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState, AppDispatch } from "services";

interface PlaceholderState {
  message: string;
}

const initialState: PlaceholderState = {
  message: "Placeholder!",
};

const counterSlice = createSlice({
  name: "placeholder",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    message: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.message = action.payload;
    },
    reset: (state) => ({
      ...state,
      message: "Placeholder!",
    }),
  },
});

const { message, reset } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(reset())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
const resetAsync = (): AppThunk => (dispatch: AppDispatch): void => {
  setTimeout(() => {
    dispatch(reset());
  }, 1000);
};

export const placeHolderActions = {
  message,
  reset,
  resetAsync,
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.placeholder.message)`
const selectCount = (state: RootState): string => state.placeholder.message;

export const placeholderSelectors = {
  selectCount,
};

export default counterSlice.reducer;
