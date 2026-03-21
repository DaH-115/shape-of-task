/**
 * 라이트/다크에 맞는 그림자·스크림(scrim) 토큰
 * — 컴포넌트에서 box-shadow / 배경 딤드 색을 하드코딩하지 않도록 묶음
 */
export type ThemeShadows = {
  /** 카드·섹션·패널 큰 떠 있는 느낌 */
  elevated: string;
  /** 태스크 카드 기본 */
  card: string;
  /** 태스크 카드 호버 */
  cardHover: string;
  /** 드롭다운·작은 팝오버 */
  dropdown: string;
  /** 모달 본문 */
  modal: string;
  /** 토글 썸 등 소형 요소 */
  switchThumb: string;
  /** 팔레트 색 원 호버 */
  paletteHover: string;
  /** 사이드 메뉴 뒤 딤드 (background-color) */
  scrim: string;
};

/** 라이트 모드 그림자 */
const lightInk = "15, 23, 42";

export const shadowsLight: ThemeShadows = {
  elevated: `0 0.12rem 0.4rem rgba(${lightInk}, 0.045), 0 0.35rem 2.2rem rgba(${lightInk}, 0.075)`,
  card: `0 1px 2px rgba(${lightInk}, 0.038), 0 4px 14px rgba(${lightInk}, 0.055)`,
  cardHover: `0 2px 6px rgba(${lightInk}, 0.055), 0 10px 28px rgba(${lightInk}, 0.085)`,
  dropdown: `0 2px 6px rgba(${lightInk}, 0.045), 0 8px 22px rgba(${lightInk}, 0.075)`,
  modal: `0 4px 8px rgba(${lightInk}, 0.04), 0 14px 36px rgba(${lightInk}, 0.09), 0 28px 56px rgba(${lightInk}, 0.055)`,
  switchThumb: `0 1px 1px rgba(${lightInk}, 0.055), 0 2px 6px rgba(${lightInk}, 0.1)`,
  paletteHover: `0 2px 4px rgba(${lightInk}, 0.055), 0 6px 18px rgba(${lightInk}, 0.1)`,
  scrim: "rgba(15, 23, 42, 0.32)",
};

/** 다크 모드 그림자 */
const darkRim = "0 0 0 1px rgba(255, 255, 255, 0.07)";

export const shadowsDark: ThemeShadows = {
  elevated: `${darkRim}, 0 0.35rem 3rem rgba(0, 0, 0, 0.75), 0 0.15rem 1rem rgba(0, 0, 0, 0.55)`,
  card: `${darkRim}, 0 2px 8px rgba(0, 0, 0, 0.55), 0 4px 20px rgba(0, 0, 0, 0.45)`,
  cardHover: `${darkRim}, 0 6px 28px rgba(0, 0, 0, 0.65), 0 2px 12px rgba(0, 0, 0, 0.5)`,
  dropdown: `${darkRim}, 0 4px 18px rgba(0, 0, 0, 0.65), 0 2px 8px rgba(0, 0, 0, 0.5)`,
  modal: `${darkRim}, 0 4px 12px rgba(0, 0, 0, 0.5), 0 12px 40px rgba(0, 0, 0, 0.55), 0 24px 64px rgba(0, 0, 0, 0.4)`,
  switchThumb:
    "0 1px 2px rgba(255, 255, 255, 0.12), 0 2px 8px rgba(0, 0, 0, 0.55)",
  paletteHover: `${darkRim}, 0 4px 16px rgba(0, 0, 0, 0.6)`,
  scrim: "rgba(0, 0, 0, 0.62)",
};
