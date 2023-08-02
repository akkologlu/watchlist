import { watchlistReducer } from "./slices/watchlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./slices/seachSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const watchlistPersistConfig = {
  key: "watchlist",
  version: 1,
  storage,
};

const searchPersistConfig = {
  key: "search",
  version: 1,
  storage,
  blacklist: ["search"], // Exclude the "search" reducer from being persisted
};

const rootReducer = combineReducers({
  watchlist: persistReducer(watchlistPersistConfig, watchlistReducer),
  search: searchReducer,
});

const persistedReducer = persistReducer(searchPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
