import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { UserAuthAcces, UserInfo } from "../../interfaces/auth.interfaces";
// import { useMutation } from "react-query";
import infoUserGeneral from "../Auth/user.json";
// import { loginUser } from "../../api/Auth.api";
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

  useHandleLoginAccess: () => void;

  setHaveLogged: React.Dispatch<React.SetStateAction<boolean>>;
  haveLogged: boolean;
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

  const [haveConnectToApi, _] = useState<boolean>(false);
  const [haveLogged, setHaveLogged] = useState<boolean>(false);

  const fakeUserInfo = infoUserGeneral;
  const [infoUser, setInfoUser] = useState<UserInfo>(fakeUserInfo);

  useEffect(() => {
    if (
      loginAccount &&
      passwordAccount &&
      errorEmailLogin === false &&
      errorPasswordLogin === false
    ) {
      setGoToLoginAction(true);
    } else {
      setGoToLoginAction(false);
    }
  }, [
    errorEmailLogin,
    errorPasswordLogin,
    loginAccount,
    passwordAccount,
    setGoToLoginAction,
  ]);

  //Hander para el login a bbdd:

  /*   const infoUserToLoginAcces = async (access: UserAuthAcces) => {
    const response = await loginUser(access);
    return response;
  }; */

  /*  const accesLogin = useMutation((access: UserAuthAcces) =>
    infoUserToLoginAcces(access)
  ); */

  //Hander para hacer login, forzado por el momento:

  const useHandleLoginAccess = () => {
    if (haveConnectToApi === false && fakeUserInfo) {
      setInfoUser({
        username: fakeUserInfo.name,
        namegym: fakeUserInfo.gym,
        avatar: fakeUserInfo.avatar,
      });
      setTimeout(() => {
        setHaveLogged(true);
      }, 2000);
    }
    return;
    /* const dataLogin = {
      email: loginAccount,
      password: passwordAccount,
    };
    accesLogin.mutateAsync(dataLogin); */
  };

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

    useHandleLoginAccess,

    setHaveLogged,
    haveLogged,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
