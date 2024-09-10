import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from './middlewares/logger';
import appSlice from './slices/appSlice';
import qrSlice from './slices/qrSlice';
// ...

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: {
      app: appSlice,
      qr: qrSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(loggerMiddleware),
    preloadedState,
  });

  return store;
}
