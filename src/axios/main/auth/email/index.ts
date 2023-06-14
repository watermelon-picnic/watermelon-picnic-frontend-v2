import request from "../..";

export const EmailTransmissionApi = async (email: string) => {
  const res: string = await request({
    method: "POST",
    url: "/auth/email/transmission",
    headers: {
      email: email,
    },
  });
  return res;
};
