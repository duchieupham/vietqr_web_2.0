'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    body1: {
      textTransform: 'initial',
    },
    body2: {
      textTransform: 'initial',
    },
    caption: {
      textTransform: 'initial',
    },
    button: {
      textTransform: 'initial',
    },
  },
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
    primary: {
      main: '#005aaa',
    },
    secondary: {
      main: '#e01c1c ',
    },
    lily: {
      white: {
        linear: 'linear-gradient(to right, #E1EFFF 0%, #E5F9FF 100%)',
      },
    },
    light: {
      white: '#E5F9FF',
      mint: {
        primary: '#BAFFBF',
        linear: 'linear-gradient(to right, #BAFFBF 0%, #CFF4D2 100%)',
      },
      lilac: {
        primary: '#F1C9FF',
        linear: 'linear-gradient(to right, #F1C9FF 0%, #FFB5AC 100%)',
      },
      aquamarine: '#91FFFF',
      grey: '#DADADA',
      yellow: 'linear-gradient(to right, #FCE9D9 0%, #FCF9DF 100%)',
    },
    chardonnay: {
      primary: '#FFDCA2',
      linear: 'linear-gradient(to right, #FFC889 0%, #FFDCA2 100%)',
    },
    pastel: {
      blue: {
        primary: '#A6C5FF',
        linear: 'linear-gradient(to right, #A6C5FF 0%, #C5CDFF 100%)',
      },
    },
    thistle: {
      primary: '#CDB3D4',
      linear: 'linear-gradient(to right, #CDB3D4 0%, #F7C1D4 100%)',
    },
    oyster: {
      pink: {
        primary: '#F5CEC7',
        linear: 'linear-gradient(to right, #D4ECDD 0%, #F7D9D9 100%)',
      },
    },
    sky: {
      blue: {
        linear: 'linear-gradient(to right, #B7EFFF 0%, #CFF4FF 100%)',
      },
    },
    pale: {
      cyan: {
        primary: '#B4FFEE',
        linear: 'linear-gradient(to right, #B4FFEE 0%, #EDFF96 100%)',
      },
      sky: {
        blue: '#BFF6FF',
      },
    },
    columbia: {
      blue: {
        primary: '#91E2FF',
        linear: 'linear-gradient(to right, #91E2FF 0%, #91FFFF 100%)',
      },
    },
    bright: {
      blue: {
        linear: 'linear-gradient(to right, #00C6FF 0%, #0072FF 100%)',
      },
      sky: {
        blue: '#00C6FF',
      },
    },
    pattern: { blue: '#E1EFFF' },
    marzipan: '#FFDCA2',
    bubblegum: '#F7C1D4',
    peachpuff: '#FFDCA2',
    blueromance: '#00C6FF',
    periwinkle: '#C5CDFF',
    brandeis: {
      blue: '#0072FF',
    },
    carousel: {
      pink: '#FFDBE7',
    },
    sundown: '#FFB5AC',
    honeysuckle: '#EDFF96',
    beauBlue: '#0A7AFF',
    artyClickDeepSkyBlue: '#0A7AFF',
    desire: '#E64047',
    cultured: '#F0F4FA',
    seashellLinear: 'linear-gradient(to right, #F0F0F0 0%, #CDCDCD 100%)',
    strawberry: '#F5233C',
    chambray: '#3048A1',
    dark: {
      yellow: 'linear-gradient(to right, #E5CCA7 0%, #736052 100%)',
      green: 'linear-gradient(to right, #1B676E 0%, #022F36 100%)',
    },
    yellowChampain: 'linear-gradient(to right, #FCE9D9 0%, #FCF9DF 100%)',
    orangeChampain: 'linear-gradient(to right, #F8DBB0 0%, #B4774B 100%)',
    aiColor: 'linear-gradient(to right, #D8ECF8 0%, #FFEAD9 50%, #F5C9D1 100%)',
    aiTextColor:
      'linear-gradient(90deg, #458BF8 0%, #FF8021 53%, #FF3751 71%, #C958DB 100%)',
    futureGreen: 'linear-gradient(to right, #9CD740 0%, #2BACE6 100%)',
  },
});

export default theme;
