import axios from 'axios';
import { api_base_url } from '../../utils/constantes';

export const apiClient = axios.create({
  baseURL: api_base_url,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});


apiClient.interceptors.request.use((config) => {
  return config;
});

export default apiClient;