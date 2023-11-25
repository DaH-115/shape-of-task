import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  paletteName: localStorage.getItem('themeName') || 'originalColors',
};

const themeChangeSlice = createSlice({
  name: 'themeChange',
  initialState,
  reducers: {
    themeChange: (state, action: PayloadAction<string>) => {
      state.paletteName = action.payload;
      localStorage.setItem('themeName', state.paletteName);
    },
  },
});

export default themeChangeSlice;
export const { themeChange } = themeChangeSlice.actions;
