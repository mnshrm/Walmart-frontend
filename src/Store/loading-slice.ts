import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState: { isLoading: false },
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default loadingSlice;
export const loadingActions = loadingSlice.actions;
