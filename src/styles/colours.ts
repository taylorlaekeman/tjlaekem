const palette = {
  grey: 'hsla(0, 0%, 0%, 75%)',
  neutral: {
    100: 'hsl(0, 0%, 90%)',
    200: 'hsl(0, 0%, 80%)',
    300: 'hsl(0, 0%, 70%)',
    400: 'hsl(0, 0%, 60%)',
    500: 'hsl(0, 0%, 50%)',
    600: 'hsl(0, 0%, 40%)',
    700: 'hsl(0, 0%, 30%)',
    800: 'hsl(0, 0%, 20%)',
    900: 'hsl(0, 0%, 10%)',
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
  text: palette.grey,
};
