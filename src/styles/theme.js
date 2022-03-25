const colors = {
  orange: '#EE5A24',
  blue: '#5758BB',
  yellow: '#FFC312',
};

const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
};

const device = {
  modile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};

export const defalutTheme = {
  colors,
  size,
  device,
};
