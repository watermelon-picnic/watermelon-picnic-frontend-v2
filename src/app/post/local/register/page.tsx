"use client";

import HeaderDiv from "@/lib/components/Header";
import RegisterBox from "@/lib/components/Post/Register/RegisterBox";
import styled from "@emotion/styled";

const LocalRegisterPage = () => {
  return (
    <>
      <HeaderDiv />
      <MainDiv>
        <h1>로컬 게시판</h1>
        <RegisterBox />
      </MainDiv>
    </>
  );
};
export default LocalRegisterPage;

const MainDiv = styled.div`
  padding: 160px 120px;
  width: 100vw;

  > h1 {
    padding: 20px 10px;
    font-size: 50px;
    font-weight: 700;
  }
`;
