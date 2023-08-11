export interface Product {
  "Product Name": string;
  Category: string;
  market_price: number;
  type: string;
  quantity?: number;
}

export type Cart = {
  items: Product[];
  totalPrice: number;
  numberOfProducts: number;
};
