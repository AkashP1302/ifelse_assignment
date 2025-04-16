import { configureStore } from '@reduxjs/toolkit';
import { cardDataApi } from '../services/cardDataApi';

export const store = configureStore({
  reducer: {
    [cardDataApi.reducerPath]: cardDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardDataApi.middleware),
});

// Types for use in your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
