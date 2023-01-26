import React, {createContext, useState} from 'react';
import { createTheme } from '@mui/system';

export const DataContext = createContext();



export const DataProvider= ({children}) => {
    const [timeSheets, setTimeSheets] = React.useState([
        {
          id: 1,
          name: {
            firstName: "Bjørn",
            lastName: "Sveia",
          },
          time: {
            hours: 1,
            min: 20,
          },
          workAddress: {
            postNr: 3131,
            streetName: "hjulveien",
            streetNr: 32,
          },
          description: "developing table",
        },
        {
          id: 1,
          name: {
            firstName: "Grete",
            lastName: "Grenna",
          },
          time: {
            hours: 0,
            min: 45,
          },
          workAddress: {
            postNr: 3132,
            streetName: "jej",
            streetNr: 23,
          },
          description: "Something",
        },
        {
          id: 1,
          name: {
            firstName: "Johan",
            lastName: "Johansen",
          },
          time: {
            hours: 3,
            min: 45,
          },
          workAddress: {
            postNr: 3132,
            streetName: "Moss",
            streetNr: 23,
          },
          description: "Something",
        },
        {
          id: 1,
          name: {
            firstName: "Jenny",
            lastName: "Hansen",
          },
          time: {
            hours: 0,
            min: 45,
          },
          workAddress: {
            postNr: 3132,
            streetName: "Moss",
            streetNr: 23,
          },
          description: "Something",
        },
        {
          id: 1,
          name: {
            firstName: "Roar",
            lastName: "Elvisen",
          },
          time: {
            hours: 0,
            min: 45,
          },
          workAddress: {
            postNr: 3132,
            streetName: "Moss",
            streetNr: 23,
          },
          description: "Something",
        },
        {
          id: 1,
          name: {
            firstName: "Grete",
            lastName: "Grenna",
          },
          time: {
            hours: 0,
            min: 45,
          },
          workAddress: {
            postNr: 3132,
            streetName: "Moss",
            streetNr: 23,
          },
          description: "Something",
        },
        {
          id: 1,
          name: {
            firstName: "Ronny",
            lastName: "hansen",
          },
          time: {
            hours: 4,
            min: 45,
          },
          workAddress: {
            postNr: 3132,
            streetName: "Moss",
            streetNr: 23,
          },
          description: "Something",
        },
        {
          id: 1,
          name: {
            firstName: "Roy",
            lastName: "Hansen",
          },
          time: {
            hours: 0,
            min: 45,
          },
          workAddress: {
            postNr: 3132,
            streetName: "Moss",
            streetNr: 23,
          },
          description: "Something",
        },
        {
          id: 1,
          name: {
            firstName: "Olga",
            lastName: "Pettersen",
          },
          time: {
            hours: 7,
            min: 15,
          },
          workAddress: {
            postNr: 3132,
            streetName: "Moss",
            streetNr: 23,
          },
          description: "Something",
        },
      ]);

  return (
    <DataContext.Provider
      value={
        {
           timeSheets,
           setTimeSheets
        }
      }>
      {children}
    </DataContext.Provider>
  );
};

 
