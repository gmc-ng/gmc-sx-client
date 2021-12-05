// axiosconfig.js
// Module imports
import axios from 'axios';

// Constant imports
import {isProduction} from './constants';

// Env variables
const {REACT_APP_BASE_URL_DEV: dev, REACT_APP_BASE_URL_PROD: prod} =
  process.env;

// configure base url
const api = axios.create({
  baseURL: `${isProduction ? prod : dev}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 30000,
});

// Export API object
export default api;
