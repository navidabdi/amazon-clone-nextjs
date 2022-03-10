import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';

// The redux global store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
