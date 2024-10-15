import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loggerMiddleware from './middlewares/logger';
import appReducer, { appStates } from './slices/appSlice';
import qrReducer from './slices/qrSlice';

const persistVersion = 1;

const migration = {
  [persistVersion]: (state) => ({
    ...state,
    app: appStates,
  }),
};
const persistConfig = {
  key: 'vietqr-root',
  storage,
  version: persistVersion,
  migrate: createMigrate(migration, { debug: false }),
  whitelist: ['app'],
};

const reducers = combineReducers({
  app: appReducer,
  qr: qrReducer,
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
