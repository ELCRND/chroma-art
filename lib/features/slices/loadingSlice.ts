import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const LoadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return action.payload;
    },
  },
  selectors: {
    selectLoading: (b) => b,
  },
});

export const { setLoading } = LoadingSlice.actions;
// export default LoadingSlice.reducer;
