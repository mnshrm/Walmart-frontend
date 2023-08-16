export interface Product {
  _id: string;
  product: string;
  category: string;
  market_price: number;
  type: string;
  quantity?: number;
}

export type Cart = {
  items: Product[];
  totalPrice: number;
  numberOfProducts: number;
};
