import request from "../..";

export interface SignupApiReqType {
  email: string;
  birth: string;
  password: string;
  nickname: string;
}

export const SignupApi = async (props: SignupApiReqType) => {
  await request({
    method: "POST",
    url: "/auth/sign-up",
    data: props,
  });
};
