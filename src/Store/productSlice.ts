import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Models/products";
import { AppDispatch } from ".";
import { loadingActions } from "./loading-slice";

type ProductSlice = {
  category: string;
  products: Product[];
  categories: string[];
};

const initialState: ProductSlice = {
  category: "Snacks & Branded Foods",
  products: [],
  categories: [
    "Snacks & Branded Foods",
    "Beverages",
    "Bakery, Cakes & Dairy",
    "Beauty & Hygiene",
    "Fragrances & Deos",
    "Cleaning & Household",
    "Gourmet & World Food",
    "Fruits & Vegetables",
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    updateProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const updateProductList: (
  a: string
) => (d: AppDispatch) => Promise<any> = (category) => {
  return async (dispatch) => {
    // Send request to backend to get products by category
    const sendRequest = async () => {
      const result = await fetch(
        `http://192.168.1.10:5000/products/${category}`
      );
      const data = await result.json();
      return data.data;
    };

    try {
      const data = await sendRequest();
      dispatch(productSlice.actions.changeCategory(category));
      dispatch(productSlice.actions.updateProducts(data));
      console.log("here");
      dispatch(loadingActions.setLoading(false));
    } catch (err) {
      console.log("There was an error");
    }
  };
};

export default productSlice;
export const productListActions = productSlice.actions;
