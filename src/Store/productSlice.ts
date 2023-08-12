import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Models/products";
import { AppDispatch } from ".";

type ProductSlice = {
  category: string;
  products: Product[];
  categories: string[];
};

const initialProducts: Product[] = [
  {
    "Product Name": "Dark Fantasy - Choco Fills Biscuits - Cookies",
    Category: "Beverages",
    market_price: 33,
    type: "Chips & Corn Snacks",
  },
  {
    "Product Name": "5 Star Oreo Chocolate Bar",
    Category: "Snacks & Branded Foods",
    market_price: 35,
    type: "Chocolates",
  },
  {
    "Product Name": "I Love You Fruit N Nut Chocolate",
    Category: "Snacks & Branded Foods",
    market_price: 100,
    type: "Chocolates",
  },
  {
    "Product Name": "Munch Chocolate Coated Crunchy Wafer - Share Pack",
    Category: "Snacks & Branded Foods",
    market_price: 100,
    type: "Chocolates",
  },
  {
    "Product Name": "Perk - Chocolate, Home Treats, 175.5 g, 27 Units",
    Category: "Snacks & Branded Foods",
    market_price: 198,
    type: "Chocolates",
  },
  {
    "Product Name": "Kisses - Almonds Chocolate",
    Category: "Snacks & Branded Foods",
    market_price: 140,
    type: "Chocolates",
  },
  {
    "Product Name": "Dark Chocolate",
    Category: "Snacks & Branded Foods",
    market_price: 25,
    type: "Chocolates",
  },
  {
    "Product Name": "Cuppa Noodles - Masala",
    Category: "Snacks & Branded Foods",
    market_price: 45,
    type: "Cup Noodles",
  },
  {
    "Product Name": "Cuppa Noodles - Chilli Chow",
    Category: "Snacks & Branded Foods",
    market_price: 45,
    type: "Cup Noodles",
  },
];

const initialState: ProductSlice = {
  category: "Snacks & Branded Foods",
  products: initialProducts,
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
      const result = await fetch("");
      const data = await result.json();
      return data;
    };

    try {
      await sendRequest();
      dispatch(productSlice.actions.changeCategory(category));
      dispatch(productSlice.actions.updateProducts([]));
    } catch (err) {
      console.log("There was an error");
    }
  };
};

export default productSlice;
export const productListActions = productSlice.actions;
