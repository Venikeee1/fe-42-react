import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import fruitsReducer from './fruits';
import userReducer from './user';
import markerReducer from './markers';
import articlesReducer from './articles';
import { loggerMiddleware } from './loggerMiddleware';
import { articlesApi } from './queries/articlesQuery';

const persistConfig = {
  key: 'userLocation',
  storage,
  whitelist: ['user', 'markers'],
};

const rootReducer = combineReducers({
  fruits: fruitsReducer,
  user: userReducer,
  markers: markerReducer,
  articles: articlesReducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, articlesApi.middleware),
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
