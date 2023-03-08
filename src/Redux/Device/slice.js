import { createSlice } from '@reduxjs/toolkit';

export const deviceTypeSlice = createSlice({
  name: 'smartPhone',
  initialState: false,
  reducers: {
    changeDeviceType(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeDeviceType } = deviceTypeSlice.actions;
