import 'styled-components';
import { DeviceTpyes, SizeTpyes } from 'styles/theme';
import { CommonColorsTypes, ColorPaletteTypes } from 'styles/theme-colors';

type ThemeType = {
  size: SizeTpyes;
  device: DeviceTpyes;
  commonColors: CommonColorsTypes;
  colors: ColorPaletteTypes;
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
