import axios from 'axios';

export const Axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${accessToken}`
  }
});

const accessToken = '757198465611-3plhmsl6dsqrha3oo9cc91o07s7mpme4.apps.googleusercontent.com';

export const GoogleSheetsAxios = axios.create({
  baseURL: 'https://sheets.googleapis.com/v4/spreadsheets/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
});