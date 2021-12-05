// Module imports
import {toast} from 'react-toastify';

// API import
import api from './api';

// Redux imports
import {store} from 'redux/store';

/**
 * Handles API calls
 * @param {string} method
 * @param {string} queryString
 * @param {object} reqObj
 * @param {boolean} shouldToast
 * @return {null}
 */
export const handleAPICall = async (
    method,
    queryString,
    reqObj,
    shouldToast = false,
) => {
  let res = {status: '', data: null, message: ''};

  try {
    if (store.getState().connection) {
      const {data, statusText} = await api[method](queryString, reqObj);
      res = {status: 'success', data, message: statusText};
    } else {
      toast.info('Request not completed because you are offline');
    }
  } catch ({response, name, message}) {
    res = {
      ...res,
      status: 'error',
      message: response ? response.data.message : `${name}: ${message}`,
    };
  } finally {
    if (shouldToast) toast[res.status](res.message);
    // console.log('response: ', res);
  }

  return res;
};

/**
 * Formats date time
 * @param {number} [dt=1]
 * @return {Date}
 */
export const formatDateTime = (dt = 1) => {
  const nd = new Date(dt * 1000);

  return nd.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
};

/**
 * Formats date
 * @param {number} [dt=1]
 * @return {Date}
 */
export const formatDate = (dt = 1) => {
  const date = new Date(dt * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
