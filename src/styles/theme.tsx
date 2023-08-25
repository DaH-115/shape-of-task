const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

const device = {
  modile: `@media all and (max-width: ${size.mobile})`,
  tablet: `@media all and (min-width: ${size.tablet})`,
  desktop: `@media all and (min-width: ${size.desktop})`,
};

export const defalutTheme = {
  size,
  device,
};
