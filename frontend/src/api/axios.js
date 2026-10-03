import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

// Attach JWT token to every outgoing request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('govassist_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-logout on 401/403 so stale tokens don't linger
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 403].includes(error.response.status)) {
      localStorage.removeItem('govassist_token');
      localStorage.removeItem('govassist_user');
    }
    return Promise.reject(error);
  }
);

export default api;
