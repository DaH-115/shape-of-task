import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paletteName: 'originalColor',
};

const themeChangeSlice = createSlice({
  name: 'themeChange',
  initialState,
  reducers: {
    themeChange: (state, action) => {
      state.paletteName = action.payload;
    },
  },
});

export default themeChangeSlice;
export const { themeChange } = themeChangeSlice.actions;
