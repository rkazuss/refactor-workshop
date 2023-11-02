import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseURL = "https://dummyjson.com";

const endpoints = {
  getProducts: "/products",
  getProductById: (id: number) => `/products/${id}`,
  getCategories: "/categories",
  getProductsByCategory: (category: string) => `/category/${category}`,
  getArticles: "/posts",
  getArticleById: (id: number) => `/posts/${id}`,
  getCartByUserId: (id: number) => `/carts/user/${id}`,
};

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiClient = {
  getProducts: (): Promise<AxiosResponse> => api.get(endpoints.getProducts),
  getProductById: (id: number): Promise<AxiosResponse> =>
    api.get(endpoints.getProductById(id)),
  getCategories: (): Promise<AxiosResponse> => api.get(endpoints.getCategories),
  getProductsByCategory: (category: string): Promise<AxiosResponse> =>
    api.get(endpoints.getProductsByCategory(category)),
  getArticles: (): Promise<AxiosResponse> => api.get(endpoints.getArticles),
  getArticleById: (id: number): Promise<AxiosResponse> =>
    api.get(endpoints.getArticleById(id)),
  getCartByUserId: (id: number): Promise<AxiosResponse> =>
    api.get(endpoints.getCartByUserId(id)),
};
export default apiClient;
