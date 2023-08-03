import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detail: {},
  },

  reducers: {
    addDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});
export const { addDetail } = detailSlice.actions;
export const detailReducer = detailSlice.reducer;
