"use client";
import {
  GetPostAnonymousApi,
  GetPostAnonymousRegionApi,
  GetPostAuthApiResType,
} from "@/axios/dist";
import HeaderDiv from "@/lib/components/Header";
import { Spinner } from "@/lib/components/Loading";
import Pagenation from "@/lib/components/Post/Pagenation";
import PostContent from "@/lib/components/Post/Post";
import PostTitle from "@/lib/components/Post/Title";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const SharePost = () => {
  const [data, setData] = useState<GetPostAuthApiResType>();
  const [current, setCurrent] = useState<number>(0);
  useEffect(() => {
    if (current === 0)
      GetPostAnonymousApi({ page: 0, size: 8 }).then((res) => {
        setData(res);
      });
    else if (data)
      GetPostAnonymousRegionApi({
        page: 0,
        size: 8,
        region: data.regions[current - 1],
      }).then((res) => {
        setData(res);
      });
  }, [current]);

  return (
    <>
      {data ? (
        <>
          <HeaderDiv />
          <MainDiv>
            <PostTitle
              data={data}
              title="공유 게시판"
              subTitle="현지인이 추천하는 진짜 놀거리!"
              current={{ state: current, setState: setCurrent }}
            />
            <Container>
              {data.posts.map((e) => (
                <PostContent data={e} path="share" />
              ))}
            </Container>
            {/* <Pagenation /> */}
          </MainDiv>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default SharePost;

const MainDiv = styled.div`
  padding: 180px 182px;

  > h1 {
    font-size: 40px;
    color: #de5256;
    font-weight: 700;
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
