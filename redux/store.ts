import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';
import { boardDataBase } from './data';
// eslint-disable-next-line import/no-cycle
import countReducer from './count';
import data from './data'

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
  counter: countReducer,
  boardData: data,
  // persist: persistReducerData,
  // Add the generated reducer as a specific top-level slice
  //   [wpApi.reducerPath]: wpApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    boardData:boardDataBase.reducer,
    persistedReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
store.dispatch(boardDataBase.actions.getRandomPlayerList())
store.dispatch(boardDataBase.actions.getInitSequential())

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
