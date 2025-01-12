import { configureStore } from '@reduxjs/toolkit';
// Import your slice reducers
import listSlice from './listSlice';

export const store = configureStore({
  reducer: {
    list: listSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
