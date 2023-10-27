import { UserInfo } from "../context/Auth/AuthContext";
import { authApi } from "./BaseApi";

export const loginUser = async (
  email: string,
  password: string
): Promise<UserInfo> => {
  const payload = {
    email,
    password,
  };

  const { data } = await authApi.post<UserInfo>("/login", payload);
  return data;
};
