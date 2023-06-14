import { MainPageApiVariableTravelRegionType } from "@/axios/dist";
import styled from "@emotion/styled";

const Location = ({ data }: { data: MainPageApiVariableTravelRegionType }) => {
  return (
    <MainDiv>
      <img src={data.image} alt="" />
      <h1>{data.region}</h1>
      <span>{data.content}</span>
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
