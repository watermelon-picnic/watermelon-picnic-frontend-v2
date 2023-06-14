"use client";

import { LoginApi } from "@/axios/dist";
import Logo from "@/data/asset/image/logo";
import HeaderDiv from "@/lib/components/Header";
import styled from "@emotion/styled";
import { ChangeEvent, useState, useEffect } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { GetUserMyPageApi } from "@/axios/main/user/my-page";

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const changeState = (e: ChangeEvent<HTMLInputElement>, props: string) => {
    setLoginData({ ...loginData, [props]: e.target.value });
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
            <InputDiv>
              <div>이메일</div>
              <input
                placeholder="이메일을 입력해주세요."
                onChange={(e) => changeState(e, "email")}
              />
            </InputDiv>
            <InputDiv>
              <div>비밀번호</div>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => changeState(e, "password")}
              />
            </InputDiv>
            <SubMitBtn
              check={!Object.values(loginData).includes("")}
              onClick={() => {
                if (!Object.values(loginData).includes(""))
                  LoginApi(loginData)
                    .then((res) => {
                      cookie.set("accessToken", res.accessToken);
                      cookie.set("refreshToken", res.refreshToken);
                      router.push("/");
                    })
                    .catch(() => alert("비밀번호가 맞지 않습니다."));
                else alert("내용을 입력해주세요.");
              }}
            >
              로그인
            </SubMitBtn>

            <span>
              서비스가 처음이신가요? <a href="./signup">회원가입 하기</a>
            </span>
          </div>
        </div>
      </MainDiv>
    </>
  );
};
export default Login;

const SubMitBtn = styled.button<{ check: boolean }>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.check ? "#de5256" : "#ddd")};
  color: ${(props) => (props.check ? "#fff" : "rgba(0, 0, 0, 0.5)")};
  border-radius: 5px;
  margin-top: 50px;
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
      padding: 100px 100px;
      position: relative;
      > img {
        width: 45px;
      }
      > span {
        position: absolute;
        bottom: 20px;
        width: 300px;
        font-weight: 500;
        left: 56%;
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

const InputDiv = styled.div`
  margin-top: 24px;
  > div {
    margin-bottom: 8px;
  }
  > input {
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 10px;
  }
`;
