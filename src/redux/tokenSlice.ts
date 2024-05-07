import { createSlice } from "@reduxjs/toolkit";

export const tokneSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
  },
  reducers: {
    clearToken: (state) => {
      state.value = "";
    },
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { clearToken, setToken } = tokneSlice.actions;
export default tokneSlice.reducer;
