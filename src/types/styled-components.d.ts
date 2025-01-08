import 'styled-components';
import { DeviceTpyes, SizeTpyes } from 'styles/theme-device';
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
