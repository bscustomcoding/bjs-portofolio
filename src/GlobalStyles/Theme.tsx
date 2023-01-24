import * as React from 'react';
import { createTheme } from '@mui/system';

export  const theme = createTheme({
  palette: {
    header: {
        background: '#7FB285'
    },
    sideNav: {
        background: '#A0D5A6'
    },
    background: {
      primary: '#fff'
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});
