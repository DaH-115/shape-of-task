import { commonColors } from 'styles/theme-colors';

export interface SizeTpyes {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface DeviceTpyes {
  mobile: string;
  tablet: string;
  desktop: string;
}

const size: SizeTpyes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

const device: DeviceTpyes = {
  mobile: `@media all and (max-width: ${size.mobile})`,
  tablet: `@media all and (min-width: ${size.tablet})`,
  desktop: `@media all and (min-width: ${size.desktop})`,
};

export const defalutTheme = {
  size,
  device,
  commonColors,
};
