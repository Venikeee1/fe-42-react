import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  createTransform,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import fruitsReducer from './fruits';
import markerReducer from './markers';
import articlesReducer from './articles';
import { articlesApi } from './queries/articlesQuery';
import authReducer from './auth/auth';
import userReducer from './user';

const transformAuth = createTransform(
  (inboundState) => {
    return { token: inboundState.token };
  },
  (outboundState) => {
    return { ...outboundState, token: outboundState.token };
  },
  // define which reducers this transform gets called for.
  { whitelist: ['auth'] }
);

const persistConfig = {
  key: 'store',
  storage,
  whitelist: ['user', 'markers', 'auth'],
  transforms: [transformAuth],
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
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(articlesApi.middleware),
});

export const persistor = persistStore(store);
