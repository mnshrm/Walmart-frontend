import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OfferDetail = {
  quantity?: number;
  discount?: number;
  product?: string;
  productID?: string;
};

type Offer = {
  isOffer: boolean;
  offer: OfferDetail;
};

const initialState: Offer = {
  isOffer: true,
  offer: {
    quantity: 2,
    discount: 30,
    product: "I LOVE YOU FRUIT AND NUT CHOCOLATE",
    productID: "abc",
  },
};

const offerSlice = createSlice({
  name: "offerSlice",
  initialState,
  reducers: {
    setOffer: (state, action: PayloadAction<OfferDetail>) => {
      state.isOffer = true;
      state.offer = action.payload;
    },
    removeOffer: (state) => {
      state.isOffer = false;
      state.offer = {};
    },
  },
});

export default offerSlice;
export const offerActions = offerSlice.actions;
