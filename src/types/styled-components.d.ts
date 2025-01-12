import 'styled-components';
import { DeviceTypes, SizeTypes } from 'styles/theme-device';
import { CommonColorsTypes, PaletteTypes } from 'styles/theme-colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    size: SizeTypes;
    device: DeviceTypes;
    commonColors: CommonColorsTypes;
    colors: PaletteTypes;
    mixins: {
      hideScrollbar: string;
    };
  }
}
