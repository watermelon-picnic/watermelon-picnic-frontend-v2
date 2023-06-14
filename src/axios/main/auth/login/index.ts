import request from "../..";

export interface LoginApiResType {
  accessToken: string;
  refreshToken: string;
}
export interface LoginApiReqType {
  email: string;
  password: string;
}
export const LoginApi = async (props: LoginApiReqType) => {
  const res: LoginApiResType = await request({
    method: "POST",
    url: "/auth/login",
    data: props,
  });
  return res;
};
