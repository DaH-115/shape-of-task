import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getThemeWithFallback } from '@/styles/theme-colors';

const THEME_KEY_STORAGE = 'themeKey';
const DARK_MODE_STORAGE = 'isDarkMode';

/** 초기 테마 키 가져오기 (기존 themeName 마이그레이션 포함) */
const getInitialThemeKey = (): string => {
  try {
    const themeKey = localStorage.getItem(THEME_KEY_STORAGE);
    if (themeKey) return getThemeWithFallback(themeKey);

    const legacyThemeName = localStorage.getItem('themeName');
    if (legacyThemeName) {
      const migrated = getThemeWithFallback(legacyThemeName);
      localStorage.setItem(THEME_KEY_STORAGE, migrated);
      localStorage.removeItem('themeName');
      return migrated;
    }

    return getThemeWithFallback('originalColors');
  } catch {
    return 'originalColors';
  }
};

const saveThemeKey = (themeKey: string): void => {
  try {
    localStorage.setItem(THEME_KEY_STORAGE, themeKey);
  } catch (error) {
    console.error('테마 저장 실패:', error);
  }
};

const getInitialDarkMode = (): boolean => {
  try {
    const v = localStorage.getItem(DARK_MODE_STORAGE);
    if (v === 'true') return true;
    if (v === 'false') return false;
    return false;
  } catch {
    return false;
  }
};

const saveDarkMode = (isDark: boolean): void => {
  try {
    localStorage.setItem(DARK_MODE_STORAGE, String(isDark));
  } catch (error) {
    console.error('다크 모드 저장 실패:', error);
  }
};

const initialState = {
  themeKey: getInitialThemeKey(),
  isDarkMode: getInitialDarkMode(),
};

const themeChangeSlice = createSlice({
  name: 'themeChange',
  initialState,
  reducers: {
    themeChange: (state, action: PayloadAction<string>) => {
      state.themeKey = getThemeWithFallback(action.payload);
      saveThemeKey(state.themeKey);
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      saveDarkMode(state.isDarkMode);
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      saveDarkMode(state.isDarkMode);
    },
  },
});

export default themeChangeSlice;
export const { themeChange, setDarkMode, toggleDarkMode } =
  themeChangeSlice.actions;
