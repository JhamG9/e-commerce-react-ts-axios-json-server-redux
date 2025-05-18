import axios from "../api/axios";
import { ProductI } from "../interfaces/Product.interface";

export const getProductsAction = async () => {
  const response = await axios.get("/products");
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};

export const createProductAction = async(data: any) => {
  const response = await axios.post("/products", data); 
  return response.data;
};

export const deleteProductAction = async (id: string) => {
  const response = await axios.delete(`/products/${id}`);
  return response.data;
};

export const updateProductAction = async (
  idProduct: string,
  body: Partial<ProductI>
) => {
  const response = await axios.put(`/products/${idProduct}`, body);
  return response.data;
};
