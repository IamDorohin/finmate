import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: 'light' },
  reducers: {
    changeAppTheme(state, action) {
      return (state = action.payload);
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
  whitelist: ['value'],
};

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);

export const { changeAppTheme } = themeSlice.actions;
