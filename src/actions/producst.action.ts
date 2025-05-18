import axios from '../api/axios';

export const getProductsAction = async() => {
  const response = await axios.get('/products');;
  return response.data;  
};

export const getProductById = (id: number) => {
  return axios.get(`/products/${id}`);
};

export const createProduct = (data: any) => {
  return axios.post('/products', data);
};

export const deleteProduct = (id: number) => {
  return axios.delete(`/products/${id}`);
};