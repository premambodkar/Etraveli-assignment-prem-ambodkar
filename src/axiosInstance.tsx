import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Ignore SSL issues
});

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/films/?format=json',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  httpsAgent,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any custom logic before the request is sent
    console.log('Request:', config);
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Process the response data
    return response.data;
  },
  (error) => {
    // Handle response errors
    console.error('Error response:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
