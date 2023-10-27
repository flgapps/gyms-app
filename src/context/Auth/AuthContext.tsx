import React, { createContext, useContext, useState, ReactNode } from "react";

export interface UserInfo {
  username: string;
  email: string;
}

interface AuthContextType {
  infoUser: UserInfo;
  setInfoUser: React.Dispatch<React.SetStateAction<UserInfo>>;
  loginAccount: string;
  passwordAccount: string;
  setLoginAccount: React.Dispatch<React.SetStateAction<string>>;
  setPasswordAccount: React.Dispatch<React.SetStateAction<string>>;

  errorEmailLogin: boolean;
  setErrorEmailLogin: React.Dispatch<React.SetStateAction<boolean>>;

  errorEmailLoginMessage: string;
  setErrorEmailLoginMessage: React.Dispatch<React.SetStateAction<string>>;

  setErrorPasswordLoginMessage: React.Dispatch<React.SetStateAction<string>>;
  errorPasswordLoginMessage: string;

  errorPasswordLogin: boolean;
  setErrorPasswordLogin: React.Dispatch<React.SetStateAction<boolean>>;

  goToLoginAction: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loginAccount, setLoginAccount] = useState<string>("");
  const [passwordAccount, setPasswordAccount] = useState<string>("");
  const [errorEmailLoginMessage, setErrorEmailLoginMessage] =
    useState<string>("");
  const [errorEmailLogin, setErrorEmailLogin] = useState<boolean>(false);

  const [goToLoginAction, setGoToLoginAction] = useState<boolean>(false);

  const [errorPasswordLoginMessage, setErrorPasswordLoginMessage] =
    useState<string>("");
  const [errorPasswordLogin, setErrorPasswordLogin] = useState<boolean>(false);

  const [infoUser, setInfoUser] = useState<UserInfo>({
    username: "",
    email: "",
  });

  const contextValue: AuthContextType = {
    infoUser,
    setInfoUser,
    loginAccount,
    passwordAccount,
    setLoginAccount,
    setPasswordAccount,

    errorEmailLogin,
    setErrorEmailLogin,

    errorEmailLoginMessage,
    setErrorEmailLoginMessage,

    errorPasswordLoginMessage,
    setErrorPasswordLoginMessage,

    errorPasswordLogin,
    setErrorPasswordLogin,

    goToLoginAction,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
