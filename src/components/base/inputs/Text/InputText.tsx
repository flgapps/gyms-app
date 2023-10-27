import TextField from "@mui/material/TextField";

interface PropsText {
  labelText: string;
  inputText: string;
  placeholderText?: string;
  setInputText: (textInput: string) => void;
  hasError: boolean;
  errorText: string;
  nameReferenceInput: string;
}

export const InputText = ({
  labelText,
  inputText,
  setInputText,
  placeholderText,
  hasError,
  errorText,
  nameReferenceInput,
}: PropsText) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      value={inputText}
      onChange={handleTextChange}
      name={nameReferenceInput}
      label={labelText}
      type="text"
      id={nameReferenceInput}
      placeholder={placeholderText}
      error={hasError}
      helperText={hasError ? errorText : ""}
      style={{ height: "65px" }}
    />
  );
};
