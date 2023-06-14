import request from "@/axios/main";

export interface GetPostAuthApiResType {
  totalPage: number;
  posts: GetPostAuthApiPostsType[];
  regions: string[];
}

export interface GetPostAuthApiPostsType {
  id: number;
  title: string;
  nickname: string;
  introduce: string;
  photo?: string;
}

export const GetPostAuthApi = async ({
  size,
  page,
}: {
  size: number;
  page: number;
}) => {
  const res: GetPostAuthApiResType = await request({
    method: "GET",
    url: `/post/auth?size=${size}&page=${page}`,
  });
  return res;
};
