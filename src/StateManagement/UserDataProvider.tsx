import React, { createContext } from "react";
import { ChildrenProps } from "./Interfaces/StateManInterfaces";
import { UserDataContextProviderType, UserDataInterface } from "./Interfaces/UserDataInterfaces";



export const UserDataContext = createContext({} as UserDataContextProviderType);
export const UserDataProvider = ({ children }: ChildrenProps) => {

  // Get data from api or in this case delivering hardcodet data
  const [userData, setUserData] = React.useState<Array<UserDataInterface>>([
    {
      id: 1,
      firstName: "Bjørn",
      lastName: "Sveia",
      tlf: "+47 97725850"
    }
  ]);

  const postUser = () => {

  } 
  
  const updateUser = () => {
    
  }
  
  const deleteUser = () => {
    
  } 

  const filterState = (
    userData: Array<UserDataInterface>,
    searchString: string
  ): Array<UserDataInterface> => {
    if (searchString) {
      return userData.filter((user: UserDataInterface) => `${user.lastName} ${user.firstName}`.toLowerCase().includes(searchString)
      );
    } else {
        return userData;
    }
    
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        postUser,
        updateUser,
        deleteUser,
        filterState,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
