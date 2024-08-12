import { configureStore } from '@reduxjs/toolkit';
import listSlice from './slices/listSlice';
import loggerMiddleware from './middlewares/logger';
// ...

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: {
      list: listSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(loggerMiddleware),
    preloadedState,
  });

  return store;
}
