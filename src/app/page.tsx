"use client";

import HeaderDiv from "@/lib/components/Header";
import MainPageBanner from "@/lib/components/MainPage/Banner";
import LocationList from "@/lib/components/MainPage/LocationList";
import WatermelonRoad from "@/lib/components/MainPage/WmRoad";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <>
      <HeaderDiv />
      <MainPageBanner />
      <Container>
        <WatermelonRoad />
        <LocationList />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0 100px;
`;
