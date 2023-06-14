"use client";

import { MainPageApi, MainPageApiResType } from "@/axios/main/main/mainPage";
import HeaderDiv from "@/lib/components/Header";
import { Spinner } from "@/lib/components/Loading";
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
      {data ? (
        <>
          <HeaderDiv />
          <MainPageBanner data={data.banners} />
          <Container>
            <WatermelonRoad data={data.watermelonLoad} />
            <LocationList data={data.variableTravelRegion} />
          </Container>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

const Container = styled.div`
  padding: 0 0 0 100px;
`;
