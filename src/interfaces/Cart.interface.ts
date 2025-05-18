import { ProductI } from "./Product.interface";

export interface CartI {
  id: string;
  userId: string;
  productId: string;
  product: ProductI;
  quantity: number;
}