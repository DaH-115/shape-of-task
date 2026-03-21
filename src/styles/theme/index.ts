/**
 * 테마 모듈 통합 export
 * - createTheme: themeKey + 다크 여부로 전체 테마 객체 생성
 */
import { defaultTheme } from "@/styles/theme-device";
import {
  themeColors,
  getThemeWithFallback,
  commonColors,
  commonColorsDark,
  resolvePaletteColors,
} from "@/styles/theme-colors";
import { shadowsLight, shadowsDark } from "@/styles/theme-shadows";

export { defaultTheme } from "@/styles/theme-device";
export {
  themeColors,
  themePalettes,
  commonColors,
  commonColorsDark,
  DEFAULT_THEME_KEY,
  getThemeWithFallback,
  resolvePaletteColors,
} from "@/styles/theme-colors";
export type {
  ThemeKey,
  PaletteTypes,
  ThemePaletteSource,
  CommonColorsTypes,
  PriorityTriple,
} from "@/styles/theme-colors";
export type { SizeTypes, DeviceTypes } from "@/styles/theme-device";
export { mixins } from "@/styles/theme-mixins";
export type { ThemeShadows } from "@/styles/theme-shadows";
export { shadowsLight, shadowsDark } from "@/styles/theme-shadows";

export const createTheme = (themeKey: string, isDarkMode: boolean) => {
  const safeKey = getThemeWithFallback(themeKey);
  const source = themeColors[safeKey];
  const neutrals = isDarkMode ? commonColorsDark : commonColors;
  const colors = resolvePaletteColors(source, isDarkMode);
  const shadows = isDarkMode ? shadowsDark : shadowsLight;

  return {
    ...defaultTheme,
    commonColors: neutrals,
    colors,
    shadows,
    isDarkMode,
  };
};
