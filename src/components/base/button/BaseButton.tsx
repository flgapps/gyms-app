import Button from "@mui/material/Button";
import { CircularIndeterminate } from "../progress/circularProgress";

interface PropsButton {
  actionText: string;
  onClick: () => void;
  disabled: boolean;
  loader?: boolean;
}

export const ButtonAction = ({
  actionText,
  onClick,
  disabled,
  loader,
}: PropsButton) => {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={onClick}
      disabled={disabled}
    >
      {loader ? <CircularIndeterminate /> : actionText}
    </Button>
  );
};
