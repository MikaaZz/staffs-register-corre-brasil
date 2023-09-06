"use client";
import { createContext, useContext } from "react";
import UserManager from "../services/user/UserManager";

const UserManagementContext = createContext<exportProps>({} as exportProps);

export const useUserManagement = () => {
  return useContext(UserManagementContext);
};

interface UserProviderProps {
  children: React.ReactNode;
}

interface exportProps {
  userManager: UserManager;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const userManager = UserManager.getInstance();
  return <UserManagementContext.Provider value={{ userManager }}>{children}</UserManagementContext.Provider>;
};
