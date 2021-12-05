// Module imports
import {toast} from 'react-toastify';

// Type imports
import {CONNECTED, DISCONNECTED} from './types';

const takeOnline = () => ({
  type: CONNECTED,
});

const takeOffline = () => ({
  type: DISCONNECTED,
});

export const handleConnectionChange = () => (dispatch, getState) => {
  const condition = navigator.onLine ? 'online' : 'offline';

  if (condition === 'online') {
    const webPing = setInterval(() => {
      fetch('//google.com', {
        mode: 'no-cors',
      })
          .then(() => {
            if (!getState().connection) toast.info(`You are back online`);
            dispatch(takeOnline());
            return clearInterval(webPing);
          })
          .catch(() => {
            dispatch(takeOffline());
            toast.info(`You are offline, but no worries, we got you covered!`);
          });
    }, 2000);
    return;
  } else {
    toast.info(`You are offline, but no worries, we got you covered!`);
    return dispatch(takeOffline());
  }
};
