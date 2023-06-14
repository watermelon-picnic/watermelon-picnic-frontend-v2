import { MainPageApiWatermelonLoadType } from "@/axios/dist";
import styled from "@emotion/styled";

const WmRoadPost = ({ data }: { data: MainPageApiWatermelonLoadType }) => {
  return (
    <MainDiv>
      <img src={data.image} alt="" />
      <div>
        <div>{data.regionName}</div>
        <h2>{data.title}</h2>
        <h3>{data.introduce}</h3>
        <span>{data.writerName}님의 여행</span>
      </div>
    </MainDiv>
  );
};
export default WmRoadPost;

const MainDiv = styled.div`
  width: 250px;
  border-radius: 15px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

  > img {
    width: 250px;
    height: 250px;
    border-radius: 15px 15px 0 0;
    object-fit: cover;
  }

  > div {
    padding: 10px 16px;
    > div {
      width: max-content;
      padding: 4px 12px;
      color: #fff;
      font-weight: 500;
      border-radius: 24px;
      font-size: 12px;
      background-color: var(--red-default);
      margin-top: 5px;
    }
    > h2 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 700;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > h3,
    > span {
      font-size: 13px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.5);
    }
    > h3 {
      margin-bottom: 16px;
    }
  }
`;
