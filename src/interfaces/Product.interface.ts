export interface Cart {
  id: string;
  userId: number;
  productId: number;
  quantity: number;
}

export interface ProductI {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

