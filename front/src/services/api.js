import axios from 'axios';

const TIMEOUT_IN_SECONDS = 30;
const BASE_URL = 'http://localhost:3010';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT_IN_SECONDS * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
