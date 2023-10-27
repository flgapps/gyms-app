import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface PropsUniqueCheckbox {
  valueCheck: string;
  setValueCheck: (valueChecks: string) => void;
}

export const InputUniqueCheckbox = ({
  valueCheck,
  setValueCheck,
}: PropsUniqueCheckbox) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueCheck(event.target.checked ? valueCheck : "");
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          value={valueCheck}
          color="primary"
          checked={valueCheck !== ""}
          onChange={handleCheckboxChange}
        />
      }
      label=""
    />
  );
};
