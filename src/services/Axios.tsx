import axios from 'axios';

export const Axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${accessToken}`
  }
});

const accessToken = 'finance-management@finance-management-398901.iam.gserviceaccount.com';

export const GoogleSheetsAxios = axios.create({
  baseURL: 'https://sheets.googleapis.com/v4/spreadsheets/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
});