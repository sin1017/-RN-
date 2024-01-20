import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line import/no-cycle
import countReducer from './count';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    // 'user',
    // 'login',
    'downloads',
    'dashboard',
    'persist',
  ],
};

const rootReducer = combineReducers({
  count: countReducer,

  // persist: persistReducerData,
  // Add the generated reducer as a specific top-level slice
  //   [wpApi.reducerPath]: wpApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  // middleware: [thunk],
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: ['persist/PERSIST'],
  //       },
  //     }).concat(wpApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
