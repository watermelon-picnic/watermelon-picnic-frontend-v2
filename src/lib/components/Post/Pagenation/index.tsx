import styled from "@emotion/styled";

const Pagenation = () => {
  return (
    <MainDiv>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>{">"}</div>
      </div>
    </MainDiv>
  );
};

export default Pagenation;

const MainDiv = styled.div`
  text-align: center;
  margin-top: 83px;
  font-size: 18px;
  > div {
    display: inline-flex;
    gap: 35px;
  }
`;
