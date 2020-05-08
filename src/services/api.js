import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://167.71.165.132:3333/api',
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
