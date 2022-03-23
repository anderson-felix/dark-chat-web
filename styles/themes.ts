export const light = {
  name: 'light',
  breakingPoints: {
    smallMobile: 500,
    mobile: 768,
    smallDesktop: 1024,
    desktop: 1366,
    largeDesktop: 1600,
    extraLargeDesktop: 1920,
  },
  boxShadow: {
    defaultShadow: '0 0.1875rem 0.5rem rgba(59, 55, 53, 0.3)',
    hardShadow: '0 0.35rem 0.75rem rgba(59, 55, 53, 0.65)',
    mediumShadow: '0 0.25rem 0.65rem rgba(59, 55, 53, 0.55)',
    largeShadow: '0 0.25rem 1.5rem rgba(59, 55, 53, 0.285)',
  },
  colors: {
    text: '#4D565C',
    modalMask: 'rgba(240, 240, 240, 0.50)',
    background: '#0e1c26',
    cardBackground: '#2A454B',
    border: '#2a454b',
  },
};

export type ITheme = typeof light;

export const themes = {
  light,
};
