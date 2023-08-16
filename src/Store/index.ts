import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import loadingSlice from "./loading-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    productList: productSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
