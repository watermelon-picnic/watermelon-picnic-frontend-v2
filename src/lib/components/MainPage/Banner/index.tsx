import styled from "@emotion/styled";

const MainPageBanner = () => {
  return (
    <BannerDiv>
      <BannerBackground>
        <div />
      </BannerBackground>
      <BannerContainer>
        <div>{"<"}</div>
        <BannerContent>
          <img
            src="https://cdn.discordapp.com/attachments/1071077149605384262/1111514558297808896/image.png"
            alt=""
          />
          <div>
            <span>
              <span>HOT</span>
              <h1>
                {"떠나자 푸르른 바다가 기다리는 곳,\n푸른 바다 푸른 제주!"}
              </h1>
            </span>
            <div>
              <div>
                <div />
              </div>
              <span>
                1<span>/3</span>
              </span>
            </div>
          </div>
        </BannerContent>
        <div>{">"}</div>
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
const BannerBackground = styled.div`
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
    background-image: url("https://cdn.discordapp.com/attachments/1071077149605384262/1111514558297808896/image.png");
    filter: blur(100px);
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
    color: #000;
  }
  > span {
    position: absolute;
    bottom: -70px;
    left: 300px;
  }
`;
const BannerContent = styled.span`
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
        color: #000;
        font-weight: 700;
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
  > img {
    width: 550px;
    height: 350px;
    object-fit: cover;
    background-color: #fff;
    border-radius: 15px;
  }
`;
