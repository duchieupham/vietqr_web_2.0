import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loggerMiddleware from './middlewares/logger';
import appReducer from './slices/appSlice';
import qrReducer from './slices/qrSlice';
import searchSlice from './slices/searchSlice';

const persistConfig = {
  key: 'vietqr-root',
  storage,
};

const reducers = combineReducers({
  app: appReducer,
  qr: qrReducer,
  search: searchSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).prepend(
      loggerMiddleware,
    ),
});

// Persistor for redux-persist
export const persistor = persistStore(store);
