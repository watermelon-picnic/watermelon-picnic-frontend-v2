import { GetPostAuthApiResType } from "@/axios/dist";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PostTitle = ({
  data,
  title,
  subTitle,
  current,
}: {
  data: GetPostAuthApiResType;
  title: string;
  subTitle: string;
  current: {
    state: number;
    setState: (value: number) => void;
  };
}) => {
  const router = useRouter();
  const [navList, setNavList] = useState<string[]>(
    ["추천 지역"].concat(data.regions)
  );
  return (
    <>
      <h1>{title}</h1>
      <span>{subTitle}</span>
      <br />
      <Nav>
        {navList.map((e, i) => (
          <NavDiv
            key={i}
            checked={i === current.state}
            onClick={() => current.setState(i)}
          >
            #{e}
          </NavDiv>
        ))}
      </Nav>
      <WriteBtn>
        <button onClick={() => router.push(`post/${window.location.pathname.split('/')[2]}/register`)}>
          글쓰기
        </button>
      </WriteBtn>
    </>
  );
};
export default PostTitle;

const NavDiv = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 35px;
  border-radius: 24px;
  background-color: ${(props) => (props.checked ? "#de5256" : "#e8e8e8")};
  color: ${(props) => (props.checked ? "#fff" : "#000")};
  transition: all 0.2s ease;
  cursor: pointer;
  
`;

const WriteBtn = styled.div`
  text-align: end;
  > button {
    padding: 6px 20px;
    background-color: #de5256;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
  }
`;

const Nav = styled.div`
  display: inline-flex;
  margin-top: 8px;
  gap: 8px;
`;
