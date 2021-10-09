import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import userReducer from './userSlice';
import { dekooApi } from '~/services/api';

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      user: userReducer,
      [dekooApi.reducerPath]: dekooApi.reducer,
    },
    middleware: (gDM) => gDM().concat(dekooApi.middleware),
    ...options,
  });

export const store = createStore();

setupListeners(store.dispatch);
