import { useContext } from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputText } from "../base/inputs/Text/InputText";
import { InputPassword } from "../base/inputs/Password/InputPassword";
import { InputUniqueCheckbox } from "../base/inputs/OneCheckbox/OneCheckbox";
import { ButtonAction } from "../base/button/BaseButton";
import { useAuthContext } from "../../context/Auth/AuthContext";

export const LoginComponents = () => {
  const { loginAccount, passwordAccount, setLoginAccount, setPasswordAccount } =
    useContext(useAuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <InputText
            labelText="Email"
            inputText={loginAccount}
            placeholderText="micuenta@email.com"
            setInputText={setLoginAccount}
            hasError={false}
            errorText={""}
            nameReferenceInput="login-email"
          />
          <InputPassword
            labelText="Contraseña"
            inputPassword={}
            placeholderText="*****"
            setInputPassword={}
            hasError={}
            errorText={}
            nameReferenceInput="login-email"
          />
          <InputUniqueCheckbox valueCheck="Recordarme" setValueCheck={} />
          <ButtonAction
            actionText="Iniciar sesión"
            onClick={() => alert("Login...")}
            disabled={false}
          />

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"No estas registrado? ¡Registrate ahora!"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
