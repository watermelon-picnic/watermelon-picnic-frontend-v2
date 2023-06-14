import request from "@/axios/main";
import { GetPostAuthDetailApiResType } from "../../auth/detail";

export const GetPostAnonymousDetailApi = async ({ id }: { id: string }) => {
  const res: GetPostAuthDetailApiResType = await request({
    method: "GET",
    url: `/post/anonymous/${id}`,
  });
  return res;
};
