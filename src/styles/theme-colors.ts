/** Zinc 기반 회색 스케일 (Tailwind/디자인 시스템 표준) */
export interface CommonColorsTypes {
  black: string;
  dark_gray: string; // 강조 텍스트
  gray: string; //  본문, 비활성화
  medium_gray: string; // 보조 텍스트
  gray_border: string; // 테두리
  light_gray: string; // 페이지·큰 배경
  /** 카드·모달·패널 면 */
  surface: string;
  /** 완료 행 등 살짝 다른 면 */
  surfaceMuted: string;
}

export const commonColors: CommonColorsTypes = {
  black: "#18181b",
  dark_gray: "#3f3f46",
  gray: "#71717a",
  medium_gray: "#a1a1aa",
  gray_border: "#e4e4e7",
  light_gray: "#f4f4f5",
  surface: "#ffffff",
  surfaceMuted: "#f8f9fa",
};

/** 다크 모드 토글 시 중성색 */
export const commonColorsDark: CommonColorsTypes = {
  black: "#fafafa",
  dark_gray: "#e4e4e7",
  gray: "#a1a1aa",
  medium_gray: "#71717a",
  gray_border: "#3f3f46",
  light_gray: "#09090b",
  surface: "#27272a",
  surfaceMuted: "#3f3f46",
};

/** 중요도 3단 색 */
export interface PriorityTriple {
  priority1: string;
  priority2: string;
  priority3: string;
}

/**
 * 테마 팔레트 단일 소스
 * — 라이트/다크 각각 priority 세트를 둠. 새 팔레트는 배열에 객체만 추가.
 */
export const themePalettes = [
  {
    key: "originalColors",
    displayName: "바다 석양",
    priorities: {
      light: {
        priority1: "#FF8C00",
        priority2: "#FFD700",
        priority3: "#1E90FF",
      },
      dark: {
        priority1: "#FB923C",
        priority2: "#FACC15",
        priority3: "#38BDF8",
      },
    },
  },
  {
    key: "colorPalette_1",
    displayName: "장미 정원",
    priorities: {
      light: {
        priority1: "#BE185D",
        priority2: "#EC4899",
        priority3: "#F9A8D4",
      },
      dark: {
        priority1: "#F472B6",
        priority2: "#F9A8D4",
        priority3: "#FBCFE8",
      },
    },
  },
  {
    key: "colorPalette_2",
    displayName: "깊은 바다",
    priorities: {
      light: {
        priority1: "#1E3A8A",
        priority2: "#3B82F6",
        priority3: "#93C5FD",
      },
      dark: {
        priority1: "#60A5FA",
        priority2: "#93C5FD",
        priority3: "#BFDBFE",
      },
    },
  },
  {
    key: "colorPalette_3",
    displayName: "숲의 바람",
    priorities: {
      light: {
        priority1: "#B91C1C",
        priority2: "#D97706",
        priority3: "#059669",
      },
      dark: {
        priority1: "#F87171",
        priority2: "#FBBF24",
        priority3: "#34D399",
      },
    },
  },
  {
    key: "colorPalette_4",
    displayName: "모던 그레이",
    priorities: {
      light: {
        priority1: "#374151",
        priority2: "#6B7280",
        priority3: "#D1D5DB",
      },
      dark: {
        priority1: "#6B7280",
        priority2: "#9CA3AF",
        priority3: "#E5E7EB",
      },
    },
  },
] as const;

export type ThemeKey = (typeof themePalettes)[number]["key"];

/** 배열 원본(라이트·다크 priority 포함) */
export type ThemePaletteSource = (typeof themePalettes)[number];

/**
 * ThemeProvider에 넣는 형태 — 항상 평탄한 priority1~3
 */
export type PaletteTypes = {
  key: ThemeKey;
  displayName: string;
  priority1: string;
  priority2: string;
  priority3: string;
};

export const DEFAULT_THEME_KEY: ThemeKey = "originalColors";

export const themeColors = Object.fromEntries(
  themePalettes.map((p) => [p.key, p]),
) as Record<ThemeKey, ThemePaletteSource>;

export const getThemeWithFallback = (key: string): ThemeKey => {
  return key in themeColors ? (key as ThemeKey) : DEFAULT_THEME_KEY;
};

/** 현재 모드에 맞게 priority 평탄화 */
export const resolvePaletteColors = (
  entry: ThemePaletteSource,
  isDark: boolean,
): PaletteTypes => {
  const p = isDark ? entry.priorities.dark : entry.priorities.light;
  return {
    key: entry.key,
    displayName: entry.displayName,
    priority1: p.priority1,
    priority2: p.priority2,
    priority3: p.priority3,
  };
};
