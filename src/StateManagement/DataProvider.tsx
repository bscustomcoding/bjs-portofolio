import React, { createContext } from "react";
import { ChildrenProps, TimeSheetInterface } from "./Interfaces/Infaces";



type TimeSheetContextType = {
  timeSheets: Array<TimeSheetInterface>;
  setTimeSheets: React.Dispatch<React.SetStateAction<Array<TimeSheetInterface>>>;
}

export const DataContext = createContext({} as TimeSheetContextType);

export const DataProvider = ({ children }: ChildrenProps) => {
  const [timeSheets, setTimeSheets] = React.useState<Array<TimeSheetInterface>>([
    {
      id: 1,
      firstName: "Bjørn",
      lastName: "Sveia",

      hours: 1,
      min: 20,
      workAddress: {
        postNr: 3131,
        streetName: "hjulveien",
        streetNr: 32,
      },
      description: "developing table",
    },
    {
      id: 2,
      firstName: "Grete",
      lastName: "Grenna",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "jej",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 3,
      firstName: "Johan",
      lastName: "Johansen",
      hours: 3,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 4,
      firstName: "Jenny",
      lastName: "Hansen",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 5,
      firstName: "Roar",
      lastName: "Elvisen",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 6,
      firstName: "Grete",
      lastName: "Grenna",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 7,
      firstName: "Ronny",
      lastName: "hansen",
      hours: 4,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 8,
      firstName: "Roy",
      lastName: "Hansen",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 9,
      firstName: "Olga",
      lastName: "Pettersen",
      hours: 7,
      min: 15,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 10,
      firstName: "Bjørn",
      lastName: "Sveia",
      hours: 1,
      min: 20,
      workAddress: {
        postNr: 3131,
        streetName: "hjulveien",
        streetNr: 32,
      },
      description: "developing table",
    },
    {
      id: 11,
      firstName: "Grete",
      lastName: "Grenna",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "jej",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 12,
      firstName: "Johan",
      lastName: "Johansen",
      hours: 3,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 13,
      firstName: "Jenny",
      lastName: "Hansen",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 14,
      firstName: "Roar",
      lastName: "Elvisen",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 15,
      firstName: "Grete",
      lastName: "Grenna",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 16,
      firstName: "Ronny",
      lastName: "hansen",
      hours: 4,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 17,
      firstName: "Roy",
      lastName: "Hansen",
      hours: 0,
      min: 45,
      workAddress: {
        postNr: 3132,
        streetName: "Moss",
        streetNr: 23,
      },
      description: "Something",
    },
    {
      id: 18,
      firstName: "Olga",
      lastName: "Pettersen",
      hours: 7,
      min: 15,
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
      value={{
        timeSheets,
        setTimeSheets,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
