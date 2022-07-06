import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from '../features/reducer/reducer';

export const store = configureStore({
  reducer: weatherReducer,
});
