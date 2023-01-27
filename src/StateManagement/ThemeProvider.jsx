import React, {createContext, useState} from 'react';
import { createTheme } from '@mui/material/styles';

export const TheemeContext = createContext();



export const TheemeProvider= ({children}) => {
   const [darkMode, setDarkMode] = useState(false);

   const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
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

 
