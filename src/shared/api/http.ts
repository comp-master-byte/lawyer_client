import axios from "axios";
import Cookies from "js-cookie";

export const API_URL = "https://backend.juraprav.ru";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Token ${JSON.parse(Cookies.get("token") as string)}`;
    return config;
});

$api.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      if (error.response.status === 401) {
          localStorage.removeItem('user');
          Cookies.remove('token');
          window.location.href = '/';
      }
      return Promise.reject(error);
  },
);

export default $api;