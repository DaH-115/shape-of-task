interface CommonColorsTypes {
  black: string;
  gray: string;
  light_gray: string;
}

export interface ColorTypes {
  name: string;
  paletteName: string;
  triangle: string;
  square: string;
  circle: string;
}

interface ThemeTypes {
  [key: string]: ColorTypes;
}

export const commonColors: CommonColorsTypes = {
  black: '#141414',
  gray: '#a6c6c4',
  light_gray: '#ecf0f1',
};

const originalColor: ColorTypes = {
  name: 'originalColor',
  paletteName: 'Original',
  triangle: '#EE5A24',
  square: '#5758BB',
  circle: '#FFC312',
};

const peachBeigeColor: ColorTypes = {
  name: 'peachBeigeColor',
  paletteName: 'Peach Beige',
  triangle: '#DBA39A',
  square: '#F0DBDB',
  circle: '#F5EBE0',
};

const purpleBlueColor: ColorTypes = {
  name: 'purpleBlueColor',
  paletteName: 'Purple Blue',
  triangle: '#ADA2FF',
  square: '#C0DEFF',
  circle: '#FFF8E1',
};

const blackBrownColor: ColorTypes = {
  name: 'blackBrownColor',
  paletteName: 'Black Brown',
  triangle: '#1A120B',
  square: '#3C2A21',
  circle: '#E5E5CB',
};

export const themeColorPalette: ColorTypes[] = [
  originalColor,
  peachBeigeColor,
  purpleBlueColor,
  blackBrownColor,
];

export const themeColors: ThemeTypes = {
  originalColor,
  peachBeigeColor,
  purpleBlueColor,
  blackBrownColor,
};
