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
import { useEffect, useState, useLayoutEffect } from "react";

const SharePost = () => {
  const [data, setData] = useState<GetPostAuthApiResType | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [cnt, setCnt] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [region, setRegion] = useState<string[]>([]);
  useEffect(() => {
    const getData = () => {
      if (typeof document !== "undefined") {
        const container = document.getElementById(
          "container"
        ) as HTMLDivElement;
        if (cnt * 8 === container?.children.length || cnt === 0) {
          if (current === 0)
            GetPostAnonymousApi({ page: cnt, size: 8 }).then((res) => {
              setCnt(cnt + 1);
              setScrolled(false);
              setData({
                totalPage: res.totalPage,
                posts:
                  data && data.posts ? data.posts.concat(res.posts) : res.posts,
                regions: res.regions,
              });
              setRegion(res.regions);
            });
          else
            GetPostAnonymousRegionApi({
              page: cnt,
              size: 8,
              region: region[current - 1],
            }).then((res) => {
              setCnt(cnt + 1);
              setScrolled(false);
              setData({
                totalPage: res.totalPage,
                posts:
                  data && data.posts ? data.posts.concat(res.posts) : res.posts,
                regions: res.regions,
              });
            });
        } else setScrolled(false);
      } else {
        setScrolled(false);
      }
    };

    if (scrolled) {
      getData();
    }
  }, [scrolled, setScrolled]);

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    window.addEventListener("scroll", (e) => {
      if (
        document.body.offsetHeight - window.innerHeight - 5 <=
        window.scrollY
      ) {
        setScrolled(true);
      }
    });
  }

  useLayoutEffect(() => {
    setCnt(0);
    setData(null);
    setScrolled(true);
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
            <Container id="container">
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
