import { AvatarComponent } from "../../components/base/avatar/BaseAvatar";
import AvatarGym from "../../assets/branding/logo_urban_gym.jpg";
import Box from "@mui/material/Box";
import style from "../authLayout.styles.module.css";

type Props = {
  children: JSX.Element;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <div>
      <header className={style.center_content}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <AvatarComponent
            imageSrc={AvatarGym}
            altText="profile-avatar"
            width={160}
            height={160}
          />
        </Box>
      </header>
      <div>{children}</div>
    </div>
  );
};
