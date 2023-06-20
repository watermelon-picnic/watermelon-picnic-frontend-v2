import { GetPostAuthApiPostsType } from "@/axios/dist";
import styled from "@emotion/styled";
import Image from "next/image";

const PostContent = ({
  data,
  path,
}: {
  data: GetPostAuthApiPostsType;
  path: string;
}) => {
  return (
    <MainDiv href={`./${path}/detail?id=${data.id}`}>
      <Image src={data.photo ?? ""} alt="" />
      <div>
        <h1>{data.title}</h1>
        <p>{data.introduce}</p>
        <span>
          <span>현지에서 작성</span>
          <span>By</span>
          <span>{data.nickname}</span>
        </span>
      </div>
    </MainDiv>
  );
};
export default PostContent;

const MainDiv = styled.a`
  border-radius: 16px;
  width: 91%;
  height: 480px;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  > img {
    width: 100%;
    height: 288px;
    object-fit: cover;
  }
  > div {
    padding: 25px;
    > h1 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > p {
      color: #868383;
      font-size: 15px;
      height: 70px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 10px;
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
