import {
  DeleteCommentsApi,
  GetPostAuthDetailApiCommentsType,
} from "@/axios/dist";
import {
  PostCommentsApi,
  PostCommentsApiReqType,
} from "@/axios/main/comment/postComments";
import { firstNameData, lastNameData } from "@/lib/export/data";
import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import cookie from "js-cookie";

const DetailPageComment = ({
  id,
  data,
}: {
  id: string;
  data: GetPostAuthDetailApiCommentsType[];
}) => {
  const [req, setReq] = useState<PostCommentsApiReqType>({
    content: "",
    name: `${
      firstNameData[Math.floor(Math.random() * firstNameData.length)] +
      " " +
      lastNameData[Math.floor(Math.random() * lastNameData.length)]
    }`,
    password: "",
  });
  const changeReqState = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    props: string
  ) => {
    setReq({ ...req, [props]: e.target.value });
  };
  const [token, setToken] = useState<string>();
  useEffect(() => {
    setToken(cookie.get("accessToken"));
  }, []);
  return (
    <>
      <MainDiv>
        <span>
          전체 댓글 <span>{data.length}</span>개
        </span>
        <hr />
        {data.map((e, i) => (
          <Comment key={i}>
            <div>
              <div>{e.name}</div>
              <div>{e.content}</div>
              <div
                onClick={() => {
                  if (cookie.get("accessToken") === undefined) {
                    let promptObj = prompt("비밀번호를 입력하세요", "");
                    if (promptObj !== null)
                      DeleteCommentsApi({ id: e.id, password: promptObj })
                        .then(() => {
                          window.location.reload();
                        })
                        .catch(() => alert("비밀번호가 틀립니다."));
                  } else
                    DeleteCommentsApi({ id: e.id })
                      .then(() => {
                        window.location.reload();
                      })
                      .catch(() => {
                        alert("자신의 댓글이 아닙니다.");
                      });
                }}
              >
                X
              </div>
            </div>
          </Comment>
        ))}
        <br />
        <br />
        <br />
        {data?.length ? <hr /> : ""}

        <Registration>
          <span>
            {token !== undefined ? (
              <></>
            ) : (
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => changeReqState(e, "password")}
              />
            )}
            <textarea
              placeholder="내용을 입력해주세요."
              onChange={(e) => changeReqState(e, "content")}
            />
          </span>
          <div>
            <button
              onClick={() => {
                console.log(req);
                if (req.content !== "")
                  if (token === undefined && req.password === "") {
                    alert("내용을 입력해주세요.");
                  } else
                    PostCommentsApi({ id: id, data: req }).then(() => {
                      window.location.reload();
                    });
              }}
            >
              댓글 등록
            </button>
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
      padding-left: 10px;
    }
    > textarea {
      padding: 20px;
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
      width: 230px;
      margin-right: 10px;
    }
    > div:nth-child(2) {
      width: 89%;
      white-space: pre-wrap;
    }
    > div:nth-child(3) {
      margin: 10px 30px;
      background-color: #de5256;
      color: #fff;
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
