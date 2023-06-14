import request from "@/axios/main";

export const PostAuthPostingApi = async (props: FormData) => {
    await request({
      method: "POST",
      url: "/post/auth/posting",
      data: props
    });
};
