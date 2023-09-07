import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://sheet2api.com',
  headers: {
    'Content-Type': 'application/json',
  }
});