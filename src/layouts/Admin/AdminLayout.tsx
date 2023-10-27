import { AvatarComponent } from "../../components/base/avatar/BaseAvatar";
import AvatarGym from "../../assets/branding/logo_urban_gym.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import style from "../authLayout.styles.module.css";

type Props = {
  children: JSX.Element;
};

export const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <div>
        <header>
          <Box sx={{ display: "flex", width: "100%" }}>
            <AvatarComponent
              imageSrc={AvatarGym}
              altText="profile-avatar"
              width={90}
              height={90}
            />
            <Box className={style.badge_container}>
              <Typography className={style.badge_name_user}>
                User name
              </Typography>
              <Typography className={style.badge_description_user}>
                Ted
              </Typography>
            </Box>
          </Box>
        </header>
      </div>
      <div>{children}</div>
    </div>
  );
};
