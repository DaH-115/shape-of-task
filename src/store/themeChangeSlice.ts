import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getThemeWithFallback } from '@/styles/theme-colors';

const STORAGE_KEY = 'themeKey';

/** 초기 테마 키 가져오기 (기존 themeName 마이그레이션 포함) */
const getInitialThemeKey = (): string => {
  try {
    const themeKey = localStorage.getItem(STORAGE_KEY);
    if (themeKey) return getThemeWithFallback(themeKey);

    const legacyThemeName = localStorage.getItem('themeName');
    if (legacyThemeName) {
      const migrated = getThemeWithFallback(legacyThemeName);
      localStorage.setItem(STORAGE_KEY, migrated);
      localStorage.removeItem('themeName');
      return migrated;
    }

    return getThemeWithFallback('originalColors');
  } catch {
    return 'originalColors';
  }
};

/** 테마 키 localStorage 저장 */
const saveThemeKey = (themeKey: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY, themeKey);
  } catch (error) {
    console.error('테마 저장 실패:', error);
  }
};

const initialState = {
  themeKey: getInitialThemeKey(),
};

const themeChangeSlice = createSlice({
  name: 'themeChange',
  initialState,
  reducers: {
    themeChange: (state, action: PayloadAction<string>) => {
      state.themeKey = getThemeWithFallback(action.payload);
      saveThemeKey(state.themeKey);
    },
  },
});

export default themeChangeSlice;
export const { themeChange } = themeChangeSlice.actions;
