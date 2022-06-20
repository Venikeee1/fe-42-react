import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import fruitsReducer from './fruits';
import markerReducer from './markers';
import articlesReducer from './articles';
import { articlesApi } from './queries/articlesQuery';
import authReducer from './auth/auth';
import userReducer from './user';

const persistConfig = {
  key: 'store',
  storage,
  whitelist: ['user', 'markers', 'auth'],
};

const rootReducer = combineReducers({
  fruits: fruitsReducer,
  markers: markerReducer,
  articles: articlesReducer,
  auth: authReducer,
  user: userReducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});

export const persistor = persistStore(store);

// const newStore = configureStore({
//   reducer: persistedReducer,
// });

// const persistConfig1 = {
//   key: 'userLocation',
//   storage,
//   whitelist: ['user', 'markers'],
// };

// newStore.subscribe(store => {
//   localStorage.setItem('persist:userLocation', {
//     user: store.getState().user,
//     markers: store.getState().markers
//   })
// })
