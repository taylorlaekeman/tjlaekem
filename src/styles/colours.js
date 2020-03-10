const palette = {
  white: 'hsl(0, 0%, 100%)',
  grey: {
    800: 'hsla(0, 0%, 0%, 60%)',
    900: 'hsla(0, 0%, 0%, 75%)'
  }
};

export default {
  background: palette.white,
  text: palette.grey[900],
  textLight: palette.grey[800]
};
