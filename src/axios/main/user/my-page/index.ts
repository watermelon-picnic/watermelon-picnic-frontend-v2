import request from "../..";
export interface GetUserMyPageApiType {
  nickname: string;
  email: string;
  region: string;
  birth: string;
}
export const GetUserMyPageApi = async () => {
  const res: GetUserMyPageApiType = await request({
    method: "GET",
    url: "/user/my-page"
  });
  return res;
};
