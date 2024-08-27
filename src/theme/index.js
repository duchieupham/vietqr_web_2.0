'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 50,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
