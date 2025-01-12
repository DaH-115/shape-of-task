import { commonColors } from 'styles/theme-colors';
import { mixins } from 'styles/theme-scrollbar';

export interface SizeTypes {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface DeviceTypes {
  mobile: string;
  tablet: string;
  desktop: string;
}

const size: SizeTypes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

const device: DeviceTypes = {
  mobile: `@media all and (max-width: ${size.mobile})`,
  tablet: `@media all and (min-width: ${size.tablet})`,
  desktop: `@media all and (min-width: ${size.desktop})`,
};

export const defaultTheme = {
  size,
  device,
  commonColors,
  mixins,
};
