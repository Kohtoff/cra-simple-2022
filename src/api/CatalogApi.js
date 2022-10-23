import { http } from '../services/request';
import axios from 'axios';

export const getProducts = (params) => {
  return http.get('/products/' + params);
};

export const getCatalogCategories = () => {
  return http.get(`/categories/`);
};

export const getProduct = (id) => {
  return http.get(`/products/${id}`);
};

export const getProductsFromCart = (cart) => {
  return axios.all(
    cart.map(
      async (item) =>
        await getProduct(item.id).then((response) => ({ ...response.data, amount: item.amount })),
    ),
  );
};

export const postOrder = (data) => {
  return http.post('/order/', data);
};
