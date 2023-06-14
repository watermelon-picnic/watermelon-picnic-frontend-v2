import styled from "@emotion/styled";

const PostTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  const navList = [
    "추천하기",
    "대전광역시",
    "부산광역시",
    "대구광역시",
    "제주도",
  ];
  return (
    <>
      <h1>{title}</h1>
      <span>{subTitle}</span>
      <br />
      <Nav>
        {navList.map((e, i) => (
          <div key={i}>#{e}</div>
        ))}
      </Nav>
      <WriteBtn>
        <button>글쓰기</button>
      </WriteBtn>
    </>
  );
};
export default PostTitle;

const WriteBtn = styled.div`
  text-align: end;
  > button {
    padding: 6px 16px;
    background-color: #de5256;
    color: #fff;
    font-size: 13px;
  }
`;

const Nav = styled.div`
  display: inline-flex;
  margin-top: 8px;
  gap: 8px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 111px;
    height: 35px;
    border-radius: 24px;
    background-color: #e8e8e8;
    color: #000;
  }
`;
