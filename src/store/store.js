import { watchlistReducer } from "./slices/watchlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./slices/seachSlice";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    search: searchReducer,
  },
});
