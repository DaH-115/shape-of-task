export interface CommonColorsTypes {
  black: string;
  gray: string;
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
  black: '#141414',
  gray: '#BFBFBF',
  light_gray: '#F2F2F2',
};

const originalColors: PaletteTypes = {
  name: 'originalColors',
  paletteName: '오리지널 팔레트',
  important: '#EE5A24',
  remember: '#5758BB',
  anytime: '#FFC312',
};

const colorPalette_1: PaletteTypes = {
  name: 'colorPalette_1',
  paletteName: '1번 팔레트',
  important: '#DC5987',
  remember: '#F2B6D0',
  anytime: '#D0D7DC',
};

const colorPalette_2: PaletteTypes = {
  name: 'colorPalette_2',
  paletteName: '2번 팔레트',
  important: '#0644BF',
  remember: '#07C7F2',
  anytime: '#F2E313',
};

const colorPalette_3: PaletteTypes = {
  name: 'colorPalette_3',
  paletteName: '3번 팔레트',
  important: '#121D40',
  remember: '#295073',
  anytime: '#517C8C',
};

export const themePalettes: PaletteTypes[] = [
  originalColors,
  colorPalette_1,
  colorPalette_2,
  colorPalette_3,
];

export const themeColors: ThemeType = {
  originalColors,
  colorPalette_1,
  colorPalette_2,
  colorPalette_3,
};
