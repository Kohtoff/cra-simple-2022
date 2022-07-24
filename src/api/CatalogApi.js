import { http } from '../services/request';
import axios from 'axios';

export const getProducts = () => {
  return http.get('/products/');
};

export const getCatalogCategories = () => {
  return http.get(`/categories/`);
};

export const getProduct = (id) => {
  return http.get(`/products/${id}`);
};

export const getProductsFromCart = (cart) => {
  return axios.all(
    cart.map(async (item) =>
      await getProduct(item.id).then((response) => ({ ...response.data, amount: item.amount })),
    ),
  );
};
