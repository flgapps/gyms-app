import Button from "@mui/material/Button";

interface PropsButton {
  actionText: string;
  onClick: () => void;
  disabled: boolean;
}

export const ButtonAction = ({
  actionText,
  onClick,
  disabled,
}: PropsButton) => {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={onClick}
      disabled={!disabled}
    >
      {actionText}
    </Button>
  );
};
