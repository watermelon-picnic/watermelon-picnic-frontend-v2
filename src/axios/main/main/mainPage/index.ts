import request from "../..";

export interface MainPageApiResType {
  banners: {
    image: string;
    introduce: string;
  }[];
  watermelonLoad: {
    title: string;
    regionName: string;
    introduce: string;
    writerName: string;
    image: string;
    type: string;
    id: number;
  }[];
  variableTravelRegion: {
    image: string;
    title: string;
    content: string;
    type: string;
    id: number;
  };
}

export const MainPageApi = async () => {
  const res: MainPageApiResType = await request({
    method: "GET",
    url: "/main-page",
  });
  return res;
};
