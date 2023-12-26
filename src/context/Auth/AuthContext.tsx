import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Session, SupabaseClient, User } from "@supabase/supabase-js";
import client from "../conexionDB";

export interface AuthContextType {
  infoUser: User | null;
  setInfoUser: React.Dispatch<React.SetStateAction<User | null>>;
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

  useHandleSignOutAccess: () => void;

  isLoading: boolean;

  supabase: SupabaseClient<any, "public", any>;
  session: Session | null;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

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
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const [supabase] = useState(client());

  const [loginAccount, setLoginAccount] = useState<string>("");
  const [passwordAccount, setPasswordAccount] = useState<string>("");
  const [errorEmailLoginMessage, setErrorEmailLoginMessage] =
    useState<string>("");
  const [errorEmailLogin, setErrorEmailLogin] = useState<boolean>(false);
  const [goToLoginAction, setGoToLoginAction] = useState<boolean>(false);
  //Control del laoder:
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [errorPasswordLoginMessage, setErrorPasswordLoginMessage] =
    useState<string>("");
  const [errorPasswordLogin, setErrorPasswordLogin] = useState<boolean>(false);

  const [infoUser, setInfoUser] = useState<User | null>(null);

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
  }, [errorEmailLogin, errorPasswordLogin, loginAccount, passwordAccount]);

  //Hander para el login a bbdd:

  /*   const infoUserToLoginAcces = async (access: UserAuthAcces) => {
    const response = await loginUser(access);
    return response;
  }; */

  /*  const accesLogin = useMutation((access: UserAuthAcces) =>
    infoUserToLoginAcces(access)
  ); */

  //Hander para hacer login, forzado por el momento:

  const useHandleLoginAccess = async () => {
    setisLoading(true);
    setGoToLoginAction(false);

    const { data, error } = await client().auth.signInWithPassword({
      email: loginAccount,
      password: passwordAccount,
    });

    if (error) {
      setErrorEmailLoginMessage(error.message);
      return;
    } else {
      setInfoUser(data.user);
      setisLoading(false);
      setSession(data.session);
    }
    return;
  };

  const useHandleSignOutAccess = async () => {
    setisLoading(true);
    setGoToLoginAction(false);

    const { error } = await client().auth.signOut();

    if (error) {
      setErrorEmailLoginMessage(error.message);
      return;
    } else {
      setInfoUser(null);
      setisLoading(false);
      setSession(null);
      setGoToLoginAction(true);
    }
    return;
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

    isLoading,
    supabase,
    session,
    useHandleSignOutAccess
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
