/**
 * 테마 모듈 통합 export
 * - createTheme: themeKey로 전체 테마 객체 생성 (폴백 포함)
 * - 기타 theme 관련 타입/상수
 */
import { defaultTheme } from "@/styles/theme-device";
import { themeColors, getThemeWithFallback } from "@/styles/theme-colors";

export { defaultTheme } from "@/styles/theme-device";
export {
  themeColors,
  themePalettes,
  commonColors,
  DEFAULT_THEME_KEY,
  getThemeWithFallback,
} from "@/styles/theme-colors";
export type {
  ThemeKey,
  PaletteTypes,
  CommonColorsTypes,
} from "@/styles/theme-colors";
export type { SizeTypes, DeviceTypes } from "@/styles/theme-device";
export { mixins } from "@/styles/theme-mixins";

/** themeKey로 테마 객체 생성 (유효하지 않은 키면 기본 테마 적용) */
export const createTheme = (themeKey: string) => {
  const safeKey = getThemeWithFallback(themeKey);
  return {
    ...defaultTheme,
    colors: themeColors[safeKey],
  };
};
