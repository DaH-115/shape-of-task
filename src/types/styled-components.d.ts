import 'styled-components';
import { ColorPaletteTypes, CommonColorsTypes } from 'styles/theme-colors';

type ThemeType = {
  size: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  device: {
    modile: string;
    tablet: string;
    desktop: string;
  };
  commonColors: CommonColorsTypes;
  colors: ColorPaletteTypes;
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
