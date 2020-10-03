const palette = {
  grey: 'hsla(0, 0%, 0%, 75%)',
  neutral: {
    100: 'hsl(0, 0%, 95%)',
    200: 'hsl(0, 0%, 91%)',
    300: 'hsl(0, 0%, 87%)',
    400: 'hsl(0, 0%, 80%)',
    500: 'hsl(0, 0%, 70%)',
    600: 'hsl(0, 0%, 55%)',
    700: 'hsl(0, 0%, 47%)',
    800: 'hsl(0, 0%, 38%)',
    900: 'hsl(0, 0%, 30%)',
  },
  white: 'hsl(0, 0%, 100%)',
};

export default {
  ...palette,
  background: palette.white,
  footer: {
    background: palette.grey,
    text: palette.white,
  },
  icon: palette.grey,
  timeline: palette.grey,
  text: palette.neutral[900],
};
