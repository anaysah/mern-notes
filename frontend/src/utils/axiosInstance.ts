// src/utils/axiosInstance.ts
import axios from 'axios';
// import { BACKEND_URL } from './constants';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // Include cookies with each request,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request Config:', config); // Log the request config
    return config;
  },
  (error) => {
    console.error('Request Error:', error); // Log the request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response); // Log the response
    return response;
  },
  (error) => {
    console.error('Response Error:', error); // Log the response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
