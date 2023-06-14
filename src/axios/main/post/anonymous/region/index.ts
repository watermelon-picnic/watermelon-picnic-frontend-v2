import request from "@/axios/main";
import { GetPostAuthApiResType } from "../../auth/main";

export const GetPostAnonymousRegionApi = async ({
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
    url: `/post/anonymous/region?size=${size}&page=${page}&name=${region}`,
  });
  return res;
};
