import React, {createContext, useState} from 'react';
import { createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

export const TheemeContext = createContext();



export const TheemeProvider= ({children}) => {
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
    <TheemeContext.Provider
      value={
        {
           darkMode,
           setDarkMode,
           theme
        }
      }>
      {children}
    </TheemeContext.Provider>
  );
};

 
