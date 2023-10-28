import { AvatarComponent } from "../../components/base/avatar/BaseAvatar";
import AvatarApp from "../../assets/branding/gym__app_brand.png";
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
            imageSrc={AvatarApp}
            altText="app-avatar"
            width={160}
            height={160}
          />
        </Box>
      </header>
      <div>{children}</div>
    </div>
  );
};
