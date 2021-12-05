// Module imports
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {isProduction} from 'utils/constants';

// Redux imports
import monitorReducerEnhancer from './enhancers/monitorReducer';
import reducers from './reducers';

// persist config
const persistConfig = {
  key: process.env.REACT_APP_PERSIST_CONFIG_KEY || 'key',
  timeout: null,
  storage,
};

// persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Configures app store
 * @param {any} preloadedState
 * @return {any}
 */
function configureAppStore(preloadedState) {
  const s = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
        },
      }).concat(logger),
    devTools: !isProduction,
    preloadedState,
    enhancers: [monitorReducerEnhancer],
  });

  if (!isProduction && module.hot) {
    module.hot.accept('./reducers', () => s.replaceReducer(reducers));
  }

  return s;
}

export const store = configureAppStore();

export const persistor = persistStore(store);
