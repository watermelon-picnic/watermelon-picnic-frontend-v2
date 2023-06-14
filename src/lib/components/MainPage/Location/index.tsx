import styled from "@emotion/styled";

const Location = () => {
  return (
    <MainDiv>
      <img src="" alt="" />
      <h1>일은 서울에서, 여행은 제주에서</h1>
      <span>지금 제주로 떠나보세요!</span>
    </MainDiv>
  );
};
export default Location;

const MainDiv = styled.div`
  width: 350px;
  margin-bottom: 150px;
  > img {
    width: 350px;
    height: 240px;
    border-radius: 15px;
    object-fit: cover;
  }
  > h1 {
    font-size: 16px;
    margin-top: 8px;
    font-weight: 700;
  }
  > span {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
  }
`;
