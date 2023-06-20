import styled from "@emotion/styled";
import cookie from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HeaderDiv = () => {
  const router = useRouter();
  const nav = [
    {
      key: "/",
      value: (
        <Image
          src="https://cdn.discordapp.com/attachments/1071077149605384262/1116240118836117534/image.png"
          alt=""
        />
      ),
    },
    { key: "/", value: "메인 페이지" },
    { key: "/post/local", value: "로컬 게시판" },
    { key: "/post/share", value: "공유 게시판" },
  ];
  // const [info, setInfo] = useState<GetUserMyPageApiType | null>();
  // useEffect(() => {
  //   GetUserMyPageApi()
  //     .then((res) => {
  //       setInfo(res);
  //       console.log(res)
  //     })
  //     .catch(() => {
  //       setInfo(null);
  //     });
  // }, []);
  const [token, setToken] = useState<string>();
  useEffect(() => {
    setToken(cookie.get("accessToken"));
  }, []);
  return (
    <>
      <MainDiv>
        <NavDiv>
          {nav.map((e) => (
            <a href={e.key}>{e.value}</a>
          ))}
        </NavDiv>
        {token !== undefined ? (
          <a
            onClick={() => {
              cookie.remove("accessToken");
              router.replace("/auth/login");
            }}
          >
            로그아웃
          </a>
        ) : (
          <a href="http://localhost:3000/auth/login">로그인</a>
        )}
      </MainDiv>
    </>
  );
};
export default HeaderDiv;

const MainDiv = styled.div`
  position: absolute;
  border-bottom: 1px solid #888888;
  z-index: 99;
  width: 100vw;
  height: 90px;
  background-color: white;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  > a {
    width: 80px;
    height: 35px;
    background-color: #de5256;
    color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const NavDiv = styled.div`
  display: inline-flex;
  gap: 50px;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  > a {
    > img {
      height: 24px;
    }
  }
`;
