import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
    results: [],
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setSearch, setResults } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
