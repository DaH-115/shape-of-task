import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// 초기 상태 가져오기 (에러 처리 포함)
const getInitialTheme = (): string => {
  try {
    return localStorage.getItem('themeName') || 'originalColors';
  } catch {
    return 'originalColors';
  }
};

// localStorage 저장 (에러 처리 포함)
const saveTheme = (themeName: string): void => {
  try {
    localStorage.setItem('themeName', themeName);
  } catch (error) {
    console.error('테마 저장 실패:', error);
  }
};

const initialState = {
  paletteName: getInitialTheme(),
};

const themeChangeSlice = createSlice({
  name: 'themeChange',
  initialState,
  reducers: {
    themeChange: (state, action: PayloadAction<string>) => {
      state.paletteName = action.payload;
      saveTheme(state.paletteName);
    },
  },
});

export default themeChangeSlice;
export const { themeChange } = themeChangeSlice.actions;
