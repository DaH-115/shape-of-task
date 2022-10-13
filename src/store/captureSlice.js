import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

const captureSlice = createSlice({
  name: 'capture',
  initialState,
  reducers: {
    isOpen: (state, action) => {
      state.value = action.payload;
    },
    isClose: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default captureSlice;
export const { isOpen, isClose } = captureSlice.actions;
