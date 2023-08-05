import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchlist: [],
    moviesByGenre: {
      28: [],
      12: [],
      16: [],
      35: [],
      80: [],
      99: [],
      18: [],
      10751: [],
      14: [],
      36: [],
      27: [],
      10402: [],
      9648: [],
      10749: [],
      878: [],
      10770: [],
      53: [],
      10752: [],
      37: [],
    },
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const movieExists = state.watchlist.find(
        (movie) => movie.id === action.payload.id
      );
      if (movieExists) {
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
    addMoviesByGenre: (state, action) => {
      state.moviesByGenre[action.payload.genreId] = action.payload.movies;
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, addMoviesByGenre } =
  watchlistSlice.actions;
export const watchlistReducer = watchlistSlice.reducer;
