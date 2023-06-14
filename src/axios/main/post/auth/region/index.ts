import request from "@/axios/main";
import { GetPostAuthApiResType } from "../main";

export const GetPostAuthRegionApi = async ({
  size,
  page,
  region,
}: {
  size: number;
  page: number;
  region: string;
}) => {
  const res: GetPostAuthApiResType = await request({
    method: "GET",
    url: `/post/auth/region?size=${size}&page=${page}&name=${region}`,
  });
  return res;
};
