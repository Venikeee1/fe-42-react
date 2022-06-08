import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import fruitsReducer from './fruits';
import userReducer from './user';
import markerReducer from './markers';

const persistConfig = {
  key: 'userLocation',
  storage,
  whitelist: ['user', 'markers'],
};

const rootReducer = combineReducers({
  fruits: fruitsReducer,
  user: userReducer,
  markers: markerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
