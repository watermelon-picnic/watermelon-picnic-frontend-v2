import request from "@/axios/main";
import { GetPostAuthApiResType } from "../../auth/main";

export const GetPostAnonymousApi = async ({
  size,
  page,
}: {
  size: number;
  page: number;
}) => {
  const res: GetPostAuthApiResType = await request({
    method: "GET",
    url: `/post/anonymous?size=${size}&page=${page}`,
  });
  return res;
};
