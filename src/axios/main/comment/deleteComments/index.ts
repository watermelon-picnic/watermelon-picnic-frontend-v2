import request from "../..";

export const DeleteCommentsApi = async ({
  id,
  password,
}: {
  id: number;
  password?: string;
}) => {
  await request({
    method: "delete",
    url: `/comment/${id}`,
    data: password ?? "",
  });
};
