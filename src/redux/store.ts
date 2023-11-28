import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themesReducer from "./Theme";

export const store = configureStore({
  reducer: {
    themes: themesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
