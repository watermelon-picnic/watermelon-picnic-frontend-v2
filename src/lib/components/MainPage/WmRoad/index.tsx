import styled from "@emotion/styled";
import WmRoadPost from "../Post";
import { MainPageApiWatermelonLoadType } from "@/axios/dist";

const WatermelonRoad = ({ data }: { data: MainPageApiWatermelonLoadType[] }) => {
  return (
    <>
      <MainDiv>
        <h1>수박 로드</h1>
        <span>순간은 여행이 되고, 여행은 추억이 된다.</span>
        <div>
          {data.map((e) => (
            <WmRoadPost data={e}/>
          ))}
        </div>
      </MainDiv>
    </>
  );
};
export default WatermelonRoad;

const MainDiv = styled.div`
  margin-top: 110px;
  > h1 {
    font-size: 24px;
    font-weight: 700;
  }
  > span {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
  }

  > div {
    margin-top: 16px;
    display: inline-flex;
    gap: 16px;
  }
`;
