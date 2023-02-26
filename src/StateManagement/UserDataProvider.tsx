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
      age: 35,
      tlf: "+47 97725850"
    }
  ]);

  // Later implmentation of try catch statement setting userdata if 200 A Okay on postUser | updateUser | deleteUser
  const postUser = (updatedUser: UserDataInterface) => {
    setUserData([ ...userData, updatedUser ])
  } 
  const updateUser = (updatedUser: UserDataInterface) => {
    setUserData([ ...userData.map((user: UserDataInterface) => user.id === updatedUser.id ? updatedUser : user) ])
  }
  const deleteUser = (updatedUser: UserDataInterface) => {
    setUserData([ ...userData.filter((user: UserDataInterface) => user.id !== updatedUser.id) ])
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
