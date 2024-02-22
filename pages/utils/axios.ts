// client/src/utils/api.ts

import axios, { AxiosError, AxiosResponse } from 'axios';

// Define the structure for the error response
interface ErrorResponse {
  message: string;
  // Other fields, if necessary
}

// Create an instance of axios with a base URL for all requests
const api = axios.create({
  baseURL: 'http://localhost:4242',
});

// Middleware for processing responses and errors
api.interceptors.response.use(
  (response: AxiosResponse) => response.data, // Return only the data from the response
  (error: AxiosError) => {
    // Error handling
    if (error.response) {
      // Server-side error (non-2xx status code)
      console.error('API Error Response:', error.response.data);
      return Promise.reject(error.response.data as ErrorResponse);
    } else if (error.request) {
      // Error during the request process (e.g., no internet connection)
      console.error('API Request Error:', error.request);
      return Promise.reject({ message: 'Request Error' } as ErrorResponse);
    } else {
      // Other errors
      console.error('API Error:', error.message);
      return Promise.reject({ message: 'Unknown Error' } as ErrorResponse);
    }
  }
);

export default api;
