'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 320,
      xs: 480,
      sm: 640,
      smp: 820,
      md: 960,
      mdp: 1024,
      lg: 1280,
      lgp: 1440,
      xl: 1920,
      xxl: 2560,
    },
  },
});

export default theme;
