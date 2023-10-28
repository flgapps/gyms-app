import { AvatarComponent } from "../../components/base/avatar/BaseAvatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";
import style from "../authLayout.styles.module.css";

type Props = {
  children: JSX.Element;
};

export const AdminLayout = ({ children }: Props) => {
  const { infoUser } = useContext(AuthContext);

  console.log("USER.....>", infoUser);

  return (
    <div>
      <div>
        <header>
          <Box sx={{ display: "flex", width: "100%" }}>
            <AvatarComponent
              imageSrc={infoUser && infoUser?.avatar}
              altText="profile-avatar"
              width={60}
              height={60}
            />
            <Box className={style.badge_container}>
              <Typography className={style.badge_name_user}>
                {infoUser && infoUser?.name}
              </Typography>
              <Typography className={style.badge_description_user}>
                {infoUser && infoUser?.gym}
              </Typography>
            </Box>
          </Box>
        </header>
      </div>
      <div>{children}</div>
    </div>
  );
};
