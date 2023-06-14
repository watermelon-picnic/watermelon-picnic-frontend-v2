import request from "@/axios/main";

export const PostAnonymousPostingApi = async (props: FormData) => {
    await request({
      method: "POST",
      url: "/post/anonymous/posting",
      data: props
    });
};
