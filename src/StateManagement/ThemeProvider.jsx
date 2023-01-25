import React, {createContext, useState} from 'react';
import { createTheme } from '@mui/system';

export const TheemeContext = createContext();



export const TheemeProvider= ({children}) => {
   const [darkMode, setDarkMode] = useState(false);

   const themePalette = createTheme ({
    palette: {
      header: {
          background: '#7FB285'
      },
      sideNav: {
          background: darkMode ? '#282828' : '#f0eee4' 
      },
      background: {
        primary: darkMode ? '#282828' : '#f0eee4' 
      },
      text: {
        primary: darkMode ?  '#f0eee4'  : '#282828',
      },
      divider: {
        primary: darkMode ?  '#f0eee4'  : '#D3D3D3',
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
           darkMode,
           setDarkMode,
           themePalette
        }
      }>
      {children}
    </TheemeContext.Provider>
  );
};

 
