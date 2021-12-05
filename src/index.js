// Module imports
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

// App component import
import App from 'app';

// Config imports
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import reportWebVitals from 'reportWebVitals';

// SCSS import
import 'assets/sass/main.scss';

// Store import
import {persistor, store} from 'redux/store';

// Util imports
import {isProduction} from 'utils/constants';

/* Hot reloading */
const renderApp = () =>
  render(
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root'),
  );
if (!isProduction && module.hot) {
  module.hot.accept('app', renderApp);
}
renderApp();

// Service worker only in production mode
if (isProduction) {
  serviceWorkerRegistration.register();
}

// Report web vitals
reportWebVitals();
