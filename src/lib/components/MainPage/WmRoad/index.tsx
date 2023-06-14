import styled from "@emotion/styled";
import WmRoadPost from "../Post";
import { MainPageApiWatermelonLoadType } from "@/axios/dist";
import { useState } from "react";
const WatermelonRoad = ({
  data,
}: {
  data: MainPageApiWatermelonLoadType[];
}) => {
  const [current, setCurrent] = useState<number>(0);
  return (
    <>
      <MainDiv current={current}>
        <h1>수박 로드</h1>
        <span>
          <span>순간은 여행이 되고, 여행은 추억이 된다.</span>
          <span>
            <div
              onClick={() => setCurrent(current > 0 ? current - 1 : current)}
            >
              {"<"}
            </div>
            <div
              onClick={() =>
                setCurrent(current + 1 <= 3 ? current + 1 : current)
              }
            >
              {">"}
            </div>
          </span>
        </span>
        <div>
          <div>
            {data.map((e) => (
              <WmRoadPost data={e} />
            ))}
          </div>
        </div>
      </MainDiv>
    </>
  );
};
export default WatermelonRoad;

const MainDiv = styled.div<{ current: number }>`
  margin-top: 110px;
  > h1 {
    font-size: 24px;
    font-weight: 700;
  }
  > span {
    width: 95%;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    > span {
      display: inline-flex;
      gap: 30px;
      > div {
        font-family: "Corben", cursive;
        font-size: 50px;
        margin-top: -20px;
        line-height: 10px;
        cursor: pointer;
      }
    }
  }

  > div {
    overflow: hidden;
    width: 100%;
    > div {
      transition: all 0.5s ease;
      transform: translateX(${(props) => -props.current * 550}px);
      margin-top: 16px;
      display: inline-flex;
      gap: 16px;
    }
  }
`;
