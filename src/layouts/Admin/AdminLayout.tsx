import { AvatarComponent } from "../../components/base/avatar/BaseAvatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";
import { ListAside } from "../../components/navbar-aside/AsideOptions";
import style from "../authLayout.styles.module.css";

type Props = {
  children: JSX.Element;
};

export const AdminLayout = ({ children }: Props) => {
  const { infoUser } = useContext(AuthContext);

  return (
    <div className={style.auth_layout_container}>
      <header className={style.header_container}>
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

      <div className={style.aside_container}>
        <aside className={style.aside_panel}>
          <ListAside />
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
};
