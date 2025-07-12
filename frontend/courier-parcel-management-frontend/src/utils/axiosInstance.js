// // src/utils/axiosInstance.js
// import axios from "axios";

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
// });

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   console.log("Token in localStorage:", token);
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default instance;
// src/utils/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add token to headers if exists
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
