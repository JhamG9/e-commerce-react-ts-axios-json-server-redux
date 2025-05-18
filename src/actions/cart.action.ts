import axiosInstance from "../api/axios";
import { CartI } from "../interfaces/Cart.interface";

export const getCartAction = async () => {
  const responseCart = await axiosInstance.get("/cart?_expand=product");
  const cartItems = await responseCart.data;

  const responseProducts = await axiosInstance.get("/products");
  const products = await responseProducts.data;

  const cartWithProducts = cartItems.map((item: any) => ({
    ...item,
    product: products.find((p: any) => p.id === item.productId),
  }));
  return cartWithProducts;
};

export const getProductInCartAtion = async (productId: string) => {
  const response = await axiosInstance.get(`/cart?productId=${productId}`);
  return response.data;
};

export const updateCartAction = async (cartId: string, body: CartI) => {
  const response = await axiosInstance.put(`/cart/${cartId}`, body);
  return response.data;
};

export const createCartAction = async (body: Partial<CartI>) => {
  const response = await axiosInstance.post("/cart", body);
  return response.data;
};

export const deleteCartAction = async (cartId: string) => {
  const response = await axiosInstance.delete(`/cart/${cartId}`);
  return response.data;
};
