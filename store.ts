import { configureStore } from '@reduxjs/toolkit';
import firebaseStatsReducer from './firebaseStatsSlice';

export const store = configureStore({
  reducer: {
    firebaseStats: firebaseStatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
