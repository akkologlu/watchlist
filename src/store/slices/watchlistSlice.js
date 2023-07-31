import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchlist: [],
  },
  reducers: {
    addToWatchlist: (state, action) => {
      if (state.watchlist.find((movie) => movie.id === action.payload.id)) {
        alert("Movie already in watchlist");

        return;
      }
      state.watchlist.push({
        id: action.payload.id,
        title: action.payload.title,
        poster_path: action.payload.poster_path,
      });
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export const watchlistReducer = watchlistSlice.reducer;
