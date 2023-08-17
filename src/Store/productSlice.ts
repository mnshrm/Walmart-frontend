import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Models/products";
import { AppDispatch } from ".";
import { loadingActions } from "./loading-slice";
import { offerActions } from "./offerSlice";

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
        `http://localhost:4000/api/v1/products/${category}`
      );
      const data = await result.json();
      return data;
    };

    try {
      const { products, offer } = await sendRequest();
      console.log(offer);
      dispatch(productSlice.actions.changeCategory(category));
      dispatch(productSlice.actions.updateProducts(products));
      if (offer) {
        dispatch(offerActions.setOffer(offer));
      }
      console.log("here");
      dispatch(loadingActions.setLoading(false));
    } catch (err) {
      console.log("There was an error");
    }
  };
};

export default productSlice;
export const productListActions = productSlice.actions;
