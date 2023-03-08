import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { deviceTypeSlice } from './Device/slice';
import { themeSlice } from './Theme/Slice';

export const store = configureStore({
  reducer: {
    smartPhone: deviceTypeSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
