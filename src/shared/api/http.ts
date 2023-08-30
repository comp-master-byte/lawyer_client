import axios from "axios";
import Cookies from "js-cookie";

export const API_URL = "https://backend.juraprav.ru";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Token ${Cookies.get("token")}`;
    return config;
});

export default $api;