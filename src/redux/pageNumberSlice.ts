import { createSlice } from "@reduxjs/toolkit";

export const pageNumberSlice = createSlice({
  name: "pageNumber",
  initialState: {
    value: 0,
  },
  reducers: {
    setFirstPageNumber: (state) => {
      state.value = 0;
    },
    setPageNumber: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFirstPageNumber, setPageNumber } = pageNumberSlice.actions;
export default pageNumberSlice.reducer;
