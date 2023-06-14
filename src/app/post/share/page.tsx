"use client";
import Pagenation from "@/lib/components/Post/Pagenation";
import PostContent from "@/lib/components/Post/Post";
import PostTitle from "@/lib/components/Post/Title";
import styled from "@emotion/styled";

const SharePost = () => {
  return (
    <MainDiv>
      <PostTitle
        title="공유 게시판"
        subTitle="현지인이 추천하는 진짜 놀거리!"
      />
      <Container>
        <PostContent />
      </Container>
      <Pagenation />
    </MainDiv>
  );
};
export default SharePost;

const MainDiv = styled.div`
  padding: 250px 182px;

  > h1 {
    font-size: 24px;
    margin: 0;
    margin-bottom: 8px;
  }
  > span {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 37px;
  margin-top: 66px;
`;
