'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 50,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1879,
      xxl: 2560,
      fluid: '100%',
    },
  },
});

export default theme;
