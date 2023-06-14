import styled from "@emotion/styled";

const PostContent = () => {
  return (
    <MainDiv>
      <img />
      <div>
        <h1>김제 지평선 축제</h1>
        <p>
          운일이가 방방 뛰고 오줌을 지리며 즐겁게 놀았다. 자나깨나 불조심 하자
          안그러면 큰일난다
        </p>
        <span>
          <span>현지에서 작성</span>
          <span>By</span>
          <span>PackMinseo</span>
        </span>
      </div>
    </MainDiv>
  );
};
export default PostContent;

const MainDiv = styled.div`
  border-radius: 16px;
  width: 91%;
  height: 510px;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  > img {
    width: 100%;
    height: 288px;
  }
  > div {
    padding: 25px;
    > h1 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 37px;
    }
    > p {
      color: #868383;
      font-size: 15px;
      height: 90px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > span {
      display: inline-flex;
      gap: 2px;
      font-size: 14px;
      > span:nth-child(1) {
        color: #de5256;
        text-decoration: underline #de5256;
        margin-right: 5px;
      }
      > span:nth-child(2) {
        color: #696969;
      }
    }
  }
`;
