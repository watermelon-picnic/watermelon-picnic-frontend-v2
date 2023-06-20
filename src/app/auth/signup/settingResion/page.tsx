"use client";

import Logo from "@/data/asset/image/logo";
import HeaderDiv from "@/lib/components/Header";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetResionAllApi, GetResionAllApiResType, PutUserRegion } from "@/axios/dist";

const SettingResion = () => {
  const router = useRouter();
  const [region, setRegion] = useState<GetResionAllApiResType>();
  useEffect(() => {
    GetResionAllApi().then((res) => {
      setRegion(res);
    });
  }, []);
  const [inputValue, setInputValue] = useState<string>('')

   const GetInitial = (str: string) => {
  const initial = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  let result = "";
  str.split("").map((c, i) => {
    const utf = c.charCodeAt(0);
    if (utf >= 44032 && utf <= 55203)
      result += initial[parseInt(String((utf - 44032) / 588))];
    else result += c.toUpperCase();
  });
  return result;
};
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

            <input
        onChange={(e) => {
          setInputValue(e.target.value.toUpperCase().replace(/(\s*)/g, ""));
        }}
        placeholder="지역을 입력해주세요. ex)대전광역시, ㄷㅈㄱㅇㅅ"
        value={inputValue}/>
            <p>
              {region?.regions.map((e,i) => (
                 <>
            {GetInitial(e.replace(/(\s*)/g, "")).includes(inputValue) ||
            e.replace(/(\s*)/g, "").includes(inputValue) ? (
              <div
                key={i}
                onClick={() => {
                  setInputValue(e);
                }}
              >
                {e}
              </div>
            ) : (
              <></>
            )}
          </>
              ))}
            </p>

            <SubMitBtn onClick={() => {
              if (region?.regions.includes(inputValue)) 
                PutUserRegion({region: inputValue}).then(() => {
                  router.push('/')
                })
              else 
                alert('지역을 선택해주세요.')
              
            }}>지역 등록</SubMitBtn>
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
  padding: 20vmin 400px 10px;
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
        padding-left: 10px;
      }
      > p {
        width: 100%;
        height: 250px;
        overflow-y: scroll;
        margin-top: 20px;
        > div {
          padding: 10px;
          border-bottom:1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
          cursor: pointer;
          &:hover {
            background-color: rgba(222,82,86,1);
            color: rgba(255,255,255);
          

          }
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
          color: rgb(222, 82, 86);
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
