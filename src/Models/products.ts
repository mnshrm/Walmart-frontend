export interface Product {
  "Product Name": string;
  Category: string;
  market_price: number;
  type: string;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export type Cart = {
  items: ProductInCart[];
  totalPrice: number;
  numberOfProducts: number;
};
