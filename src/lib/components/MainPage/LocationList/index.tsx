import styled from "@emotion/styled";
import Location from "../Location";
import { MainPageApiVariableTravelRegionType } from "@/axios/dist";
import { useState } from "react";

const LocationList = ({
  data,
}: {
  data: MainPageApiVariableTravelRegionType[];
}) => {
  const [current, setCurrent] = useState<number>(0);
  return (
    <MainDiv current={current}>
      <span>
        수박 나들이와 함께 <span>341</span>일 <span>24</span>행복
      </span>
      <h1>
        <div>
          <span>국내의 다양한 여행지를 만나보세요!</span>
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
        </div>
      </h1>
      <div>
        <div>
          {data.map((e) => (
            <Location data={e} />
          ))}
        </div>
      </div>
    </MainDiv>
  );
};
export default LocationList;

const MainDiv = styled.div<{ current: number }>`
  margin-top: 110px;
  > h1 {
    font-size: 24px;
    font-weight: 700;
    > div {
      width: 95%;
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
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  > span {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    > span {
      color: var(--red-default);
    }
  }
  > div {
    overflow: hidden;
    width: 100%;
    > div {
      transform: translateX(${(props) => -props.current * 496}px);
      margin-top: 16px;
      transition: all 0.5s ease;
      display: inline-flex;
      gap: 16px;
    }
  }
`;
