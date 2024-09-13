'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 960,
      lg: 1280,
      lgp: 1440,
      xl: 1920,
      xxl: 2560,
    },
  },
  palette: {
    lily: {
      whiteLinear: 'linear-gradient(to right, #E1EFFF 0%, #E5F9FF 100%)',
      mintLinear: 'linear-gradient(to right, #BAFFBF 0%, #CFF4D2 100%)',
    },
    chardonnay: {
      linear: 'linear-gradient(to right, #FFC889 0%, #FFDCA2 100%)',
    },
  },
});

export default theme;
