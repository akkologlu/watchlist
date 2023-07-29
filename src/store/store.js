import { watchlistReducer } from "./slices/watchlistSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});
