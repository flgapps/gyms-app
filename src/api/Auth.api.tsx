import { UserAuthAcces, UserInfo } from "../interfaces/auth.interfaces";
import { authApi } from "./BaseApi";

export const loginUser = async (access: UserAuthAcces): Promise<UserInfo> => {
  const { email, password } = access;

  const payload = {
    email,
    password,
  };

  const { data } = await authApi.post<UserInfo>("/login", payload);
  return data;
};
