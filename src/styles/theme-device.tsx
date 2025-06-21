import { commonColors } from 'styles/theme-colors';
import { mixins } from 'styles/theme-scrollbar';

export interface SizeTypes {
  mobile: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface DeviceTypes {
  mobile: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

const size: SizeTypes = {
  mobile: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const device: DeviceTypes = {
  mobile: `@media all and (max-width: ${size.mobile})`,
  sm: `@media all and (min-width: ${size.sm})`,
  md: `@media all and (min-width: ${size.md})`,
  lg: `@media all and (min-width: ${size.lg})`,
  xl: `@media all and (min-width: ${size.xl})`,
  '2xl': `@media all and (min-width: ${size['2xl']})`,
};

export const defaultTheme = {
  size,
  device,
  commonColors,
  mixins,
};
