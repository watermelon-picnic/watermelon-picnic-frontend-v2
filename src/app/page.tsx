"use client";

import { MainPageApi, MainPageApiResType } from "@/axios/main/main/mainPage";
import HeaderDiv from "@/lib/components/Header";
import MainPageBanner from "@/lib/components/MainPage/Banner";
import LocationList from "@/lib/components/MainPage/LocationList";
import WatermelonRoad from "@/lib/components/MainPage/WmRoad";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<MainPageApiResType>();

  useEffect(() => {
    MainPageApi().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <>
      <HeaderDiv />
      {data ? (
        <>
          <MainPageBanner data={data.banners} />
          <Container>
            <WatermelonRoad data={data.watermelonLoad} />
            <LocationList data={data.variableTravelRegion} />
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

const Container = styled.div`
  padding: 0 100px;
`;
