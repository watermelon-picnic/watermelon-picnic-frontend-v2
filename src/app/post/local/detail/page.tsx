"use client";

import {
  GetPostAuthDetailApi,
  GetPostAuthDetailApiResType,
} from "@/axios/dist";
import HeaderDiv from "@/lib/components/Header";
import { Spinner } from "@/lib/components/Loading";
import DetailPageComment from "@/lib/components/Post/Detail/Comment";
import styled from "@emotion/styled";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocalDetailPage = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<GetPostAuthDetailApiResType>();
  const id = searchParams.get("id") as string;
  useEffect(() => {
    GetPostAuthDetailApi({ id: id }).then((res) => {
      setData(res);
    });
  }, []);
  return (
    <>
      {data ? (
        <>
          <HeaderDiv />
          <MainDiv>
            <h1>로컬 게시판</h1>
            <hr />
            <Title>
              <h2>{data.title}</h2>
              <div>
                <span>{data.name}</span>
                <div>ㅤ</div>
                <span>{data.region}</span>
                <div>ㅤ</div>
                <span>{data.date}</span>
              </div>
            </Title>
            <hr />
            <Content>
              {data.photo ? <img src={data.photo} alt="" /> : <></>}
              <p>{data.content}</p>
            </Content>
            <DetailPageComment id={id} data={data.comments} />
          </MainDiv>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default LocalDetailPage;

const Title = styled.div`
  padding: 20px 30px;
  > h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
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
    white-space: pre-wrap;
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
