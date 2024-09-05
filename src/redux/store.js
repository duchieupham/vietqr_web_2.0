import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from './middlewares/logger';
import listSlice from './slices/listSlice';
import qrSlice from './slices/qrSlice';
// ...

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: {
      list: listSlice,
      qr: qrSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(loggerMiddleware),
    preloadedState,
  });

  return store;
}
