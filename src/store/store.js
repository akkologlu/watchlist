import { watchlistReducer } from "./slices/watchlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./slices/seachSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { detailReducer } from "./slices/detailSlice";

const watchlistPersistConfig = {
  key: "watchlist",
  version: 1,
  storage,
};

const searchPersistConfig = {
  key: "search",
  version: 1,
  storage,
};

const detailPersistConfig = {
  key: "detail",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  watchlist: persistReducer(watchlistPersistConfig, watchlistReducer),
  search: persistReducer(searchPersistConfig, searchReducer),
  detail: persistReducer(detailPersistConfig, detailReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
