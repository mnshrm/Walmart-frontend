import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product } from "../Models/products";
import { AppDispatch } from ".";

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
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item !== undefined) {
        item.quantity!++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalPrice += action.payload.market_price;

      state.numberOfProducts++;
    },
    // TO REMOVE ITEM FROM CART
    removeItem(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.product === action.payload);

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
    emptyCart(state) {
      state.items = [];
      state.numberOfProducts = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

export const sendCartDetails: (c: Cart) => (d: AppDispatch) => void = (
  cart
) => {
  return async (dispatch) => {
    // 1 -> Send the bill to backend

    const bill = {
      totalPrice: cart.totalPrice,
      products: cart.items.map((itm) => ({
        product: itm.product,
        quantity: itm.quantity!,
        market_price: itm.market_price,
        total_price: itm.market_price * itm.quantity!,
      })),
    };

    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/bills", {
        method: "POST",
        body: JSON.stringify(bill),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      return data;
    };

    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
    // 2 -> Empty cart
    dispatch(cartActions.emptyCart());
  };
};
