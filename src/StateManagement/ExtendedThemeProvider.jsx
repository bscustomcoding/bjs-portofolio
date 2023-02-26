import React, {createContext, useState} from 'react';
import { createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

export const ExtendedThemeContext = createContext();



export const ExtendedThemeProvider = ({children}) => {
   const [darkMode, setDarkMode] = useState(false);

   const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      customHeader: {
        primary: darkMode ? green[600] : green[300]
      },
      customDelete: darkMode ? red[700] : red[400]
    },
  })

  return (
    <ExtendedThemeContext.Provider
      value={
        {
           darkMode,
           setDarkMode,
           theme
        }
      }>
      {children}
    </ExtendedThemeContext.Provider>
  );
};

 
