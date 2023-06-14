import styled from "@emotion/styled";
import Location from "../Location";
import { MainPageApiVariableTravelRegionType } from "@/axios/dist";

const LocationList = ({
  data,
}: {
  data: MainPageApiVariableTravelRegionType[];
}) => {
  return (
    <MainDiv>
      <span>
        수박 나들이와 함께 <span>341</span>일 <span>24</span>행복
      </span>
      <h1>국내의 다양한 여행지를 만나보세요!</h1>
      <div>
        {data.map((e) => (
          <Location data={e}/>
        ))}
      </div>
    </MainDiv>
  );
};
export default LocationList;

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
    > span {
      color: var(--red-default);
    }
  }
  > div {
    margin-top: 16px;
    display: inline-flex;
    gap: 16px;
  }
`;
