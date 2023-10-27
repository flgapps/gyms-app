import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

interface PropsAvatar {
  altText: string;
  imageSrc: string;
  width: number;
  height: number;
}

export const AvatarComponent = ({
  altText,
  imageSrc,
  width,
  height,
}: PropsAvatar) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt={altText}
        src={imageSrc}
        sx={{ width: width, height: height }}
      />
    </Stack>
  );
};
