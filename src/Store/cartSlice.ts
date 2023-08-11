import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product } from "../Models/products";

const cartInitialState: Cart = {
  items: [],
  totalPrice: 0,
  numberOfProducts: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    // TO ADD ITEM INTO CART
    addItem(state, action: PayloadAction<Product>) {
      const item = state.items.find(
        (item) => item["Product Name"] === action.payload["Product Name"]
      );
      if (item !== undefined) {
        item.quantity!++;
        state.totalPrice += item.market_price;
      } else {
        console.log("new item added");
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.numberOfProducts++;
    },
    // TO REMOVE ITEM FROM CART
    removeItem(state, action: PayloadAction<string>) {
      const item = state.items.find(
        (item) => item["Product Name"] === action.payload
      );

      //   IF ITEM IS PRESENT IN CART

      if (item !== undefined) {
        if (item.quantity! > 1) {
          item.quantity!--;
        } else {
          // IF QUANTITY OF THIS PARTICULAR ITEM IN CART IS 1, THEN REMOVE THIS ITEM FROM CART

          state.items = state.items.filter((itm) => itm !== item);
        }
        state.totalPrice -= item.market_price;

        // Decrement total quantity for both cases
        state.numberOfProducts--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
