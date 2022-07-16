import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { weatherReducer } from '../features/reducer/reducer';

export const store = configureStore({
  reducer: weatherReducer, middleware: [thunk], devTools:true
});
