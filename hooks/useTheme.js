module.exports = () => ({
  radius: {
    pills: 100,
    normal: 8,
    full: '100%',
  },
  typography: {
    size: {
      xs: 14,
      sm: 16,
      md: 20,
      xl: 24,
    },
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      gray: {
        light: '#f5f5f5',
        main: '#e0e0e0',
        dark: '#aaa',
      },
    },
    primary: {
      light: '#ff8551',
      main: '#ff4d00',
      dark: '#c53b00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
});
