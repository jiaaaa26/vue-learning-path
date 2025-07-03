import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
