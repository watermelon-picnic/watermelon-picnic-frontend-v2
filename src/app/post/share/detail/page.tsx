"use client";

import HeaderDiv from "@/lib/components/Header";
import DetailPageComment from "@/lib/components/Post/Detail/Comment";
import styled from "@emotion/styled";

const ShareDetailPage = () => {
  return (
    <>
      <HeaderDiv />
      <MainDiv>
        <h1>공유게시판</h1>
        <hr />
        <Title>
          <h2>전북 김제시의 멋진 불꽃</h2>
          <div>
            <span>김우닐</span>
            <div>ㅤ</div>
            <span>김우닐</span>
            <div>ㅤ</div>
            <span>김우닐</span>
          </div>
        </Title>
        <hr />
        <Content>
          <img
            src="https://img.lovepik.com/photo/20211203/medium/lovepik-piles-of-files-picture_501472939.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            optio, repellat sapiente quam eius aut nemo sunt odit cum quis
            molestias, sint veniam perspiciatis consequatur provident
            repellendus voluptates amet laborum!
          </p>
        </Content>

        <DetailPageComment />
      </MainDiv>
    </>
  );
};
export default ShareDetailPage;

const Title = styled.div`
  padding: 20px 30px;
  > h2 {
    font-size: 30px;
    font-weight: 700;
  }
  > div {
    display: inline-flex;
    gap: 15px;
    > div {
      background-color: #999;
      width: 1px;
      height: 100%;
    }
  }
  ~ hr {
    width: 100%;
    height: 2px;
    border: none;
    background-color: #dedede;
  }
`;

const Content = styled.div`
  padding: 80px;
  > img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  > p {
    margin-top: 30px;
    font-size: 24px;
  }
`;

const MainDiv = styled.div`
  width: 100vw;
  padding: 120px;

  > h1 {
    font-size: 50px;
    color: #de5256;
    padding: 30px 20px;
    font-weight: 700;
  }
  > hr {
    width: 100%;
    height: 2px;
    border: none;
    background-color: #de5256;
  }
`;
