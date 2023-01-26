import React, {createContext, useState} from 'react';
import { createTheme } from '@mui/system';

export const TheemeContext = createContext();



export const TheemeProvider= ({children}) => {
   const [darkMode, setDarkMode] = useState(false);

   const themePalette = createTheme ({
    palette: {
      header: {
          background: '#50C878'
      },
      sideNav: {
          background: darkMode ? '#424242' : '#f0eee4' 
      },
      background: {
        primary: darkMode ? '#424242' : '#f0eee4' 
      },
      text: {
        primary: darkMode ?  '#f0eee4'  : '#282828',
      },
      divider: {
        primary: darkMode ?  '#f0eee4'  : '#bdbdbd',
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

 
