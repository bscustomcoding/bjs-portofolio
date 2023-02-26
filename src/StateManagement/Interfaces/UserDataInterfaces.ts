export interface TimeSheetInterface {
    id?: number | null;
    firstName: string;
    lastName: string;
    hours: number;
    min: number;
    workAddress?: {
      postNr: number;
      streetName: string;
      streetNr: number;
    },
    description?: string;
}

export interface UserDataInterface {
  id?: number | null;
  firstName?: string;
  lastName?: string;
  tlf?: string;
  age?: number;
  address?: {
    postNr: number;
    streetName: string;
    streetNr: number;
  },
}

export type UserVoidFunction = (user: UserDataInterface) => void;
export type UserDataSearchFunction = (userData: Array<UserDataInterface>, searchString: string) => Array<UserDataInterface>;

export type UserDataContextProviderType = {
  userData: Array<UserDataInterface>;
  setUserData: React.Dispatch<React.SetStateAction<Array<UserDataInterface>>>;
  postUser: UserVoidFunction;
  updateUser: UserVoidFunction;
  deleteUser: UserVoidFunction;
  filterState: UserDataSearchFunction;
}

