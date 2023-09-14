import axios from 'axios';

export const Axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
});