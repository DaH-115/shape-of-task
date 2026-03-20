/** Zinc 기반 회색 스케일 (Tailwind/디자인 시스템 표준) */
export interface CommonColorsTypes {
  black: string;
  dark_gray: string; // zinc-700: 강조 텍스트
  gray: string; // zinc-500: 본문, 비활성화
  medium_gray: string; // zinc-400: 보조 텍스트
  gray_border: string; // zinc-200: 테두리
  light_gray: string; // zinc-100: 배경
}

/** 테마 키 타입 - themeColors 객체의 키 */
export type ThemeKey =
  | "originalColors"
  | "colorPalette_1"
  | "colorPalette_2"
  | "colorPalette_3"
  | "colorPalette_4";

/** 테마 팔레트 - key: themeColors 객체 키, displayName: UI 표시용 이름 */
export interface PaletteTypes {
  key: ThemeKey;
  displayName: string;
  important: string;
  remember: string;
  anytime: string;
}

/** 기본 테마 키 (폴백용) */
export const DEFAULT_THEME_KEY: ThemeKey = "originalColors";

export const commonColors: CommonColorsTypes = {
  black: "#18181b",
  dark_gray: "#3f3f46",
  gray: "#71717a",
  medium_gray: "#a1a1aa",
  gray_border: "#e4e4e7",
  light_gray: "#f4f4f5",
};

const originalColors: PaletteTypes = {
  key: "originalColors",
  displayName: "Ocean Sunset",
  important: "#FF8C00",
  remember: "#FFD700",
  anytime: "#1E90FF",
};

const colorPalette_1: PaletteTypes = {
  key: "colorPalette_1",
  displayName: "Rose Garden",
  important: "#BE185D",
  remember: "#EC4899",
  anytime: "#F9A8D4",
};

const colorPalette_2: PaletteTypes = {
  key: "colorPalette_2",
  displayName: "Deep Ocean",
  important: "#1E3A8A",
  remember: "#3B82F6",
  anytime: "#93C5FD",
};

const colorPalette_3: PaletteTypes = {
  key: "colorPalette_3",
  displayName: "Forest Breeze",
  important: "#B91C1C",
  remember: "#D97706",
  anytime: "#059669",
};

const colorPalette_4: PaletteTypes = {
  key: "colorPalette_4",
  displayName: "Modern Gray",
  important: "#374151",
  remember: "#6B7280",
  anytime: "#D1D5DB",
};

// 배열 형태 (UI에서 리스트로 보여줄 때 사용)
export const themePalettes: PaletteTypes[] = [
  originalColors,
  colorPalette_1,
  colorPalette_2,
  colorPalette_3,
  colorPalette_4,
];

// 객체 형태 (특정 테마를 바로 찾을 때 사용)
export const themeColors: Record<ThemeKey, PaletteTypes> = {
  originalColors,
  colorPalette_1,
  colorPalette_2,
  colorPalette_3,
  colorPalette_4,
};

/** 유효한 테마 키인지 검증 후 반환 (없으면 기본값) */
export const getThemeWithFallback = (key: string): ThemeKey => {
  return key in themeColors ? (key as ThemeKey) : DEFAULT_THEME_KEY;
};
