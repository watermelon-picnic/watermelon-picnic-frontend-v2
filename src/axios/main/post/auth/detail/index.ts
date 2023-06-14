import request from "@/axios/main";

export interface GetPostAuthDetailApiResType {
  title: string;
  name: string;
  region: string;
  date: string;
  content: string;
  photo?: string;
  comments: GetPostAuthDetailApiCommentsType[];
}
export interface GetPostAuthDetailApiCommentsType {
  id: number;
  name: string;
  content: string;
}

export const GetPostAuthDetailApi = async ({ id }: { id: string }) => {
  const res: GetPostAuthDetailApiResType = await request({
    method: "GET",
    url: `/post/auth/${id}`,
  });
  return res;
};
