import request from "../..";
export interface GetResionAllApiResType {
  regions: string[];
}
export const GetResionAllApi = async () => {
  const res: GetResionAllApiResType = await request({
    method: "GET",
    url: "/region/all",
  });
  return res;
};
