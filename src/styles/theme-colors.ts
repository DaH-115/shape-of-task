/** Zinc 기반 회색 스케일 (Tailwind/디자인 시스템 표준) */
export interface CommonColorsTypes {
  black: string;
  dark_gray: string; // 강조 텍스트
  gray: string; //  본문, 비활성화
  medium_gray: string; // 보조 텍스트
  gray_border: string; // 테두리
  light_gray: string; // 배경
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
  priority1: string;
  priority2: string;
  priority3: string;
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
  displayName: "바다 석양",
  priority1: "#FF8C00",
  priority2: "#FFD700",
  priority3: "#1E90FF",
};

const colorPalette_1: PaletteTypes = {
  key: "colorPalette_1",
  displayName: "장미 정원",
  priority1: "#BE185D",
  priority2: "#EC4899",
  priority3: "#F9A8D4",
};

const colorPalette_2: PaletteTypes = {
  key: "colorPalette_2",
  displayName: "깊은 바다",
  priority1: "#1E3A8A",
  priority2: "#3B82F6",
  priority3: "#93C5FD",
};

const colorPalette_3: PaletteTypes = {
  key: "colorPalette_3",
  displayName: "숲의 바람",
  priority1: "#B91C1C",
  priority2: "#D97706",
  priority3: "#059669",
};

const colorPalette_4: PaletteTypes = {
  key: "colorPalette_4",
  displayName: "모던 그레이",
  priority1: "#374151",
  priority2: "#6B7280",
  priority3: "#D1D5DB",
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
