import React, {createContext, useState} from 'react';
import { createTheme } from '@mui/system';

export const TheemeContext = createContext();



export const TheemeProvider= ({children}) => {
   const [theeme, setTheeme] = useState(false);

   const themePalette = createTheme ({
    palette: {
      header: {
          background: '#7FB285'
      },
      sideNav: {
          background: theeme ? '#282828' : '#fff' 
      },
      background: {
        primary: theeme ? '#282828' : '#fff' 
      },
      text: {
        primary: theeme ?  '#fff'  : '#282828',
      },
      divider: {
        primary: theeme ?  '#F5F5F5'  : '#D3D3D3',
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
  });

  return (
    <TheemeContext.Provider
      value={
        {
           theeme,
           setTheeme,
           themePalette
        }
      }>
      {children}
    </TheemeContext.Provider>
  );
};

 
