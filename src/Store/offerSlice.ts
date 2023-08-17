import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Models/products";
export type OfferDetail = {
  product?: Product;
  quantity?: number;
  discount?: number;
};

type Offer = {
  appliedOffer: boolean;
  isOffer: boolean;
  offer: OfferDetail;
};

const initialState: Offer = {
  appliedOffer: false,
  isOffer: false,
  offer: {},
};

const offerSlice = createSlice({
  name: "offerSlice",
  initialState,
  reducers: {
    setOffer: (state, action: PayloadAction<OfferDetail>) => {
      state.appliedOffer = false;
      state.isOffer = true;
      state.offer = action.payload;
    },
    removeOffer: (state) => {
      state.appliedOffer = true;
      state.isOffer = false;
      state.offer = {};
    },
  },
});

export default offerSlice;
export const offerActions = offerSlice.actions;
