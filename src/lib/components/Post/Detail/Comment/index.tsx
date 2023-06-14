import styled from "@emotion/styled";

const DetailPageComment = () => {
  return (
    <>
      <MainDiv>
        <span>
          전체 댓글 <span>3</span>개
        </span>
        <hr />
        <Comment>
          <div>
            <div>dfghjk</div>
            <div>yyfutcyhgjbojipk</div>
            <div>X</div>
          </div>
        </Comment>
        <br />
        <br />
        <br />
        <hr />

        <Registration>
          <span>
            <input />
            <textarea />
          </span>
          <div>
            <button>댓글 등록</button>
          </div>
        </Registration>
      </MainDiv>
    </>
  );
};

export default DetailPageComment;

const Registration = styled.div`
  width: 100%;
  padding: 30px 0;
  > span {
    width: 100%;
    display: inline-flex;
    > input {
      width: 280px;
      height: 50px;
      border: 1px solid #8d8d8d;
      margin-right: 40px;
    }
    > textarea {
      width: 100%;
      height: 300px;
      border: 1px solid #8d8d8d;
      resize: none;
    }
  }
  > div {
    width: 100%;
    text-align: end;
    > button {
      margin-top: 20px;
      padding: 14px 30px;
      background-color: #de5256;
      color: #fff;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

const Comment = styled.div`
  > div {
    border-bottom: 1px solid #dedede;
    display: inline-flex;
    width: 100%;
    align-items: center;
    font-size: 20px;
    > div:nth-child(1) {
      width: 100px;
      margin-right: 10px;
    }
    > div:nth-child(2) {
      width: 89%;
    }
    > div:nth-child(3) {
      margin: 10px 30px;
      background-color: #d9d9d9;
      padding: 5px 15px;
    }
  }
`;

const MainDiv = styled.div`
  > span {
    font-size: 18px;
    font-weight: 600;
    > span {
      color: #de5256;
    }
  }

  > hr {
    margin: 10px 0;
    width: 100%;
    height: 3px;
    background-color: #de5256;
  }
`;
