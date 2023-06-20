import { MainPageApiBannersType } from "@/axios/main/main/mainPage";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

const MainPageBanner = ({ data }: { data: MainPageApiBannersType[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <BannerDiv>
      <BannerBackground imageUrl={data[current] ? data[current].image : ""}>
        <div />
      </BannerBackground>
      <BannerContainer>
        <div onClick={() => setCurrent((3 + current - 1) % 3)}>{"<"}</div>
        <BannerContent current={-current}>
          <>
            <p>
              {data.map((e, i) => (
                <Image key={i} src={e ? e.image : ""} alt="" />
              ))}
            </p>
            <div>
              <span>
                <span>HOT</span>
                <h1>{data[current].introduce}</h1>
              </span>
              <div>
                <div>
                  <div />
                </div>
                <span>
                  {current + 1}
                  <span>/3</span>
                </span>
              </div>
            </div>
          </>
        </BannerContent>
        <div onClick={() => setCurrent((current + 1) % 3)}>{">"}</div>
      </BannerContainer>
    </BannerDiv>
  );
};
export default MainPageBanner;

const BannerDiv = styled.div`
  width: 100vw;
  height: 440px;
  position: relative;
`;
const BannerBackground = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
    transform: scale(1.02);
    background-size: cover;
    background-position: center;
    transition: 0.5s;
    background-image: url(${(props) => props.imageUrl});
    filter: blur(50px);
  }
`;
const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 250px 225px 0;
  display: inline-flex;
  justify-content: space-between;
  > div {
    font-family: "Corben", cursive;
    font-size: 40px;
    color: #fff;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    cursor: pointer;
  }
  > span {
    position: absolute;
    bottom: -70px;
    left: 300px;
  }
`;
const BannerContent = styled.span<{ current: number }>`
  display: flex;
  gap: 40px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 100px;
    > span {
      > span {
        display: flex;
        width: 70px;
        justify-content: center;
        padding: 6px 0;
        font-size: 16px;
        font-weight: 700;
        border-radius: 24px;
        color: #fff;
        background-color: var(--red-default);
        margin-bottom: 5px;
      }
      > h1 {
        margin: 0;
        font-size: 24px;
        white-space: pre-wrap;
        color: #fff;
        font-weight: 700;
        text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
      }
    }
    > div {
      display: inline-flex;
      align-items: center;
      gap: 20px;
      > div {
        width: 300px;
        height: 2px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.8);
        position: relative;
        > div {
          position: absolute;
          left: 0;
          width: 33.3%;
          height: 100%;
          border-radius: 5px;
          background-color: var(--red-default);
          transition: all 0.5s ease;
          transform: translateX(${(props) => -props.current * 100}%);
        }
      }
      > span {
        font-weight: 700;
        color: #000;
        > span {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  > p {
    display: inline-flex;
    width: 550px;
    overflow: hidden;
    > img {
      transition: all 0.5s ease;
      transform: translateX(${(props) => props.current * 550}px);
      width: 550px;
      height: 350px;
      object-fit: cover;
      background-color: #fff;
      border-radius: 15px;
    }
  }
`;
