import TextField from "@mui/material/TextField";

interface PropsPassword {
  labelText: string;
  inputPassword: string;
  setInputPassword: (password: string) => void;
  hasError: boolean;
  errorText: string;
  placeholderText: string;
  nameReferenceInput: string;
}

export const InputPassword = ({
  labelText,
  inputPassword,
  setInputPassword,
  hasError,
  errorText,
  placeholderText,
  nameReferenceInput,
}: PropsPassword) => {
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      value={inputPassword}
      onChange={handlePasswordChange}
      name={nameReferenceInput}
      label={labelText}
      type="password"
      id={nameReferenceInput}
      autoComplete="current-password"
      placeholder={placeholderText}
      error={hasError}
      helperText={hasError ? errorText : ""}
      style={{ height: "65px" }}
    />
  );
};
