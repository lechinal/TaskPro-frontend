import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 
import { authReducer, } from './auth/authSlice';
import { messagerReduce } from './help/messageSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    message: messagerReduce,
   
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
