const colors = {
  orange: '#EE5A24',
  blue: '#5758BB',
  yellow: '#FFC312',
  grey: '#a6c6c4',
  light_grey: '#ecf0f1',
};

const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

const device = {
  modile: `@media all and (max-width: ${size.mobile})`,
  tablet: `@media all and (min-width: ${size.mobile})`,
  desktop: `@media all and (min-width: ${size.desktop})`,
};

export const defalutTheme = {
  colors,
  size,
  device,
};
