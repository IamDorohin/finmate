import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    changeAppTheme(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeAppTheme } = themeSlice.actions;
