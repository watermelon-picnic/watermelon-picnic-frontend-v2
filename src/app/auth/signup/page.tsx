"use client";

import { EmailTransmissionApi, SignupApi } from "@/axios/dist";
import Logo from "@/data/asset/image/logo";
import HeaderDiv from "@/lib/components/Header";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Signup = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    nickname: "",
    certified: "",
  });
  const [certified, setCertified] = useState<string>("");
  const inputArr = [
    { key: "nickname", value: "닉네임" },
    { key: "email", value: "이메일" },
    { key: "certified", value: "인증번호" },
    { key: "password", value: "비밀번호" },
  ];
  const changeSignupData = (e: ChangeEvent<HTMLInputElement>, props: string) =>
    setSignupData({ ...signupData, [props]: e.target.value });

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
            {inputArr.map((e) => (
              <InputDiv>
                <div>
                  {e.value}{" "}
                  <span
                    onClick={() =>
                      EmailTransmissionApi(signupData.email).then((res) => {
                        alert("인증번호 발송!");
                        setCertified(res);
                      })
                    }
                  >
                    {e.key === "email" ? "인증번호 발송" : ""}
                  </span>
                </div>
                <input
                  type={e.key === "password" ? "password" : "text"}
                  placeholder={`${e.value}을 입력해주세요.`}
                  onChange={(event) => changeSignupData(event, e.key)}
                />
              </InputDiv>
            ))}
            <SubMitBtn
              check={!Object.values(signupData).includes("")}
              onClick={() => {
                if (!Object.values(signupData).includes(""))
                  if (signupData.certified == certified)
                    SignupApi({
                      email: signupData.email,
                      password: signupData.password,
                      nickname: signupData.nickname,
                      birth: "050101",
                    })
                      .then(() => {
                        alert("회원가입 성공");
                        router.push("auth/login");
                      })
                      .catch(() => {
                        alert("회원가입 실패");
                      });
                  else alert("인증번호가 틀렸습니다.");
                else alert("내용을 입력해주세요.");
              }}
            >
              회원가입
            </SubMitBtn>

            <span>
              기존 회원이신가요? <a href="./login">로그인 하기</a>
            </span>
          </div>
        </div>
      </MainDiv>
    </>
  );
};
export default Signup;

const SubMitBtn = styled.button<{ check: boolean }>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.check ? "#de5256" : "#ddd")};
  color: ${(props) => (props.check ? "#fff" : "rgba(0, 0, 0, 0.5)")};
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

const InputDiv = styled.div`
  margin-top: 12px;
  > div {
    margin-bottom: 8px;
    > span {
      color: #de5256;
      margin-left: 5px;
      cursor: pointer;
    }
  }
  > input {
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 10px;
  }
`;
