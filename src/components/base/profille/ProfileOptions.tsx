import { AvatarComponent } from "../avatar/BaseAvatar";
import AvatarGym from "../../../assets/branding/logo_urban_gym.jpg";

export const ProfileBadge = () => {
  return (
    <AvatarComponent
      imageSrc={AvatarGym}
      altText="profile-avatar"
      width={80}
      height={80}
    />
  );
};
