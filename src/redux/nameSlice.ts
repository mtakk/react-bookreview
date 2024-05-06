import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    value: "",
  },
  reducers: {
    clearName: (state) => {
      state.value = "";
    },
    setName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { clearName, setName } = nameSlice.actions;
export default nameSlice.reducer;
