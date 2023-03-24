import { createContext, ReactNode, useState, useEffect } from "react";
import { IUser } from "../types/user";

export interface IAppContextType {
  userDetails: IUser;
  setUserDetails: React.Dispatch<React.SetStateAction<IUser>>;
}

export const defaultState = {
  userDetails: {
    username: "",
    email: "",
    dob: "",
    age: 0,
    gender: "",
    mobile: 0,
    _id: "",
    token: "",
  },
  setUserDetails: () => {},
} as IAppContextType;

export const AppContext = createContext(defaultState);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetails] = useState<IUser | any>({
    username: "",
    email: "",
    dob: "",
    age: 0,
    gender: "",
    mobile: 0,
    _id: "",
    token: "",
  });

  return (
    <AppContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
