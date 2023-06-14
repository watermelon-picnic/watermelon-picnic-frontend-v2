"use client";

import Logo from "@/data/asset/image/logo";
import HeaderDiv from "@/lib/components/Header";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetResionAllApi, GetResionAllApiResType } from "@/axios/dist";

const SettingResion = () => {
  const [region, setRegion] = useState<GetResionAllApiResType>();
  useEffect(() => {
    GetResionAllApi().then((res) => {
      setRegion(res);
    });
  }, []);
  return (
    <>
      <HeaderDiv />
      <MainDiv>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/1071077149605384262/1116231625819295764/image.png"
            alt=""
          />
          <div>
            <Logo />
            <Title>
              <span>뻔한 수도권아닌, Fun한 수도권 밖으로!</span>
              <h1>
                수도 밖 나들이 <span>수박 나들이</span>
              </h1>
            </Title>

            <input placeholder="지역을 입력해주세요. ex)대전광역시, ㄷㅈㄱㅇㅅ"/>
            <p>
              {region?.regions.map((e) => (
                <div>{e}</div>
              ))}
            </p>

            <SubMitBtn>회원가입</SubMitBtn>

            <span>
              기존 회원이신가요? <a href="./login">로그인 하기</a>
            </span>
          </div>
        </div>
      </MainDiv>
    </>
  );
};
export default SettingResion;

const SubMitBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #de5256;
  color: #fff;
  border-radius: 5px;
  margin-top: 30px;
`;

const MainDiv = styled.div`
  padding: 170px 400px 10px;
  > div {
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    display: inline-flex;

    > img {
      width: 50%;
      height: max-content;
    }
    > div {
      padding: 50px 100px;
      position: relative;
      > input {
        width: 100%;
        margin-top: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      }
      > p {
        width: 100%;
        height: 250px;
        overflow-y: scroll;
        margin-top: 20px;
        > div {
          margin: 10px;
          height: 30px;
          border-bottom:1px solid rgba(0, 0, 0, 0.1);
        }
      }
      > img {
        width: 45px;
      }
      > span {
        position: absolute;
        bottom: 20px;
        width: 300px;
        font-weight: 500;
        left: 58%;
        transform: translateX(-50%);
        > a {
          text-decoration: none;
          color: #de5256;
          cursor: pointer;
        }
      }
    }
  }
`;

const Title = styled.div`
  margin-top: 8px;
  > span {
    font-size: 16px;
  }
  > h1 {
    font-size: 30px;
    font-weight: 700;
    > span {
      color: #de5256;
    }
  }
`;
