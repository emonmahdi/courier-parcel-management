import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (data) => {
    const res = await API.post("/auth/login", data);
    localStorage.setItem("accessToken", res.data.token);
    return res.data;
  },
  register: async (data) => {
    const res = await API.post("/auth/register", data);
    localStorage.setItem("accessToken", res.data.token);
    return res.data;
  },
  logout: () => {
    localStorage.removeItem("accessToken");
  },
};
