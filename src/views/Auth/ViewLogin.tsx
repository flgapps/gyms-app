import { useContext, useEffect } from "react";
import { InputText } from "../../components/base/inputs/Text/InputText";
import { AuthContext } from "../../context/Auth/AuthContext";
import { InputPassword } from "../../components/base/inputs/Password/InputPassword";
import { authValidateEmail } from "../../utils/auth.utils";
import { ButtonAction } from "../../components/base/button/BaseButton";
import style from "./Auth.module.css";

export const ViewLogin = () => {
  const {
    loginAccount,
    setLoginAccount,
    passwordAccount,
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
  } = useContext(AuthContext);

  useEffect(() => {
    if (loginAccount) {
      const hasErrorEmail = authValidateEmail(loginAccount);
      if (!hasErrorEmail) {
        setErrorEmailLogin(true);
        setErrorEmailLoginMessage(
          "Email no válido. Revisa el correo ingresado"
        );
      } else {
        setErrorEmailLogin(false);
        setErrorEmailLoginMessage("");
      }
    } else if (loginAccount.length === 0) {
      setErrorEmailLogin(false);
      setErrorEmailLoginMessage("");
    }
  }, [loginAccount, setErrorEmailLogin, setErrorEmailLoginMessage]);

  useEffect(() => {
    if (passwordAccount.length > 0 && passwordAccount.length <= 6) {
      setErrorPasswordLogin(true);
      setErrorPasswordLoginMessage("La contraseña es muy corta.");
    } else if (passwordAccount.length === 0) {
      setErrorPasswordLogin(false);
      setErrorPasswordLoginMessage("");
    }
  }, [passwordAccount, setErrorPasswordLoginMessage, setErrorPasswordLogin]);

  return (
    <main className={style.container_login}>
      <section className={style.container_auth}>
        <div className={style.card}>
          <h4 className={style.header_login}>Inicia Sesión</h4>
          <div>
            <InputText
              labelText="Email"
              inputText={loginAccount}
              placeholderText="Tu correo electrónico"
              setInputText={setLoginAccount}
              hasError={errorEmailLogin}
              errorText={errorEmailLoginMessage}
              nameReferenceInput="email-login"
            />
            <InputPassword
              labelText="Contraseña"
              inputText={passwordAccount}
              placeholderText="Clave"
              setInputText={setPasswordAccount}
              hasError={errorPasswordLogin}
              errorText={errorPasswordLoginMessage}
              nameReferenceInput="email-password"
            />
            <div>
              <ButtonAction
                actionText="Ingresar"
                onClick={() => alert("Login")}
                disabled={goToLoginAction}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
