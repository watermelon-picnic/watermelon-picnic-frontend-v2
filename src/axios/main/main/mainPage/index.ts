import request from "../..";

export interface MainPageApiResType {
  banners: MainPageApiBannersType[];
  watermelonLoad: MainPageApiWatermelonLoadType[];
  variableTravelRegion: MainPageApiVariableTravelRegionType[];
}
export interface MainPageApiBannersType {
  image: string;
  introduce: string;
}
export interface MainPageApiWatermelonLoadType {
  title: string;
  regionName: string;
  introduce: string;
  writerName: string;
  image: string;
  type: string;
  id: number;
}
export interface MainPageApiVariableTravelRegionType {
  image: string;
  region: string;
  content: string;
  type: string;
  id: number;
}

export const MainPageApi = async () => {
  const res: MainPageApiResType = await request({
    method: "GET",
    url: "/main-page",
  });
  return res;
};
