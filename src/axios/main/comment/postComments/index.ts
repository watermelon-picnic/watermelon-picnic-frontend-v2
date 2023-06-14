import request from "@/axios/main";
export interface PostCommentsApiReqType {
  content: string;
  name: string;
  password: string;
}
export const PostCommentsApi = async ({
  id,
  data,
}: {
  id: string;
  data: PostCommentsApiReqType;
}) => {
  await request({
    method: "POST",
    url: `/comment/${id}`,
    data: data,
  });
};
