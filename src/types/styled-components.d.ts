import 'styled-components';
import { DeviceTpyes, SizeTpyes } from 'styles/theme';
import { CommonColorsTypes, PaletteTypes } from 'styles/theme-colors';

type ThemeType = {
  size: SizeTpyes;
  device: DeviceTpyes;
  commonColors: CommonColorsTypes;
  colors: PaletteTypes;
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
