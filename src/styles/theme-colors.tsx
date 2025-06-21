export interface CommonColorsTypes {
  black: string;
  dark_gray: string;
  gray: string;
  medium_gray: string;
  light_gray: string;
}

export interface PaletteTypes {
  name: string;
  paletteName: string;
  important: string;
  remember: string;
  anytime: string;
}

interface ThemeType {
  [key: string]: PaletteTypes;
}
export const commonColors: CommonColorsTypes = {
  black: '#171717',
  dark_gray: '#404040',
  gray: '#737373',
  medium_gray: '#a3a3a3',
  light_gray: '#f5f5f5',
};

const originalColors: PaletteTypes = {
  name: 'originalColors',
  paletteName: 'Ocean Sunset',
  important: '#FF8C00',
  remember: '#FFD700',
  anytime: '#1E90FF',
};

const colorPalette_1: PaletteTypes = {
  name: 'colorPalette_1',
  paletteName: 'Rose Garden',
  important: '#BE185D',
  remember: '#EC4899',
  anytime: '#F9A8D4',
};

const colorPalette_2: PaletteTypes = {
  name: 'colorPalette_2',
  paletteName: 'Deep Ocean',
  important: '#1E3A8A',
  remember: '#3B82F6',
  anytime: '#93C5FD',
};

const colorPalette_3: PaletteTypes = {
  name: 'colorPalette_3',
  paletteName: 'Forest Breeze',
  important: '#B91C1C',
  remember: '#D97706',
  anytime: '#059669',
};

const colorPalette_4: PaletteTypes = {
  name: 'colorPalette_4',
  paletteName: 'Modern Gray',
  important: '#374151',
  remember: '#6B7280',
  anytime: '#D1D5DB',
};

export const themePalettes: PaletteTypes[] = [
  originalColors,
  colorPalette_1,
  colorPalette_2,
  colorPalette_3,
  colorPalette_4,
];

export const themeColors: ThemeType = {
  originalColors,
  colorPalette_1,
  colorPalette_2,
  colorPalette_3,
  colorPalette_4,
};
