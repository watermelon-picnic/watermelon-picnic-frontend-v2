import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PostAuthPostingApi } from "@/axios/dist";

const RegisterBox = () => {
  const router = useRouter();
  const [content, setContent] = useState({
    title: "",
    content: "",
  });
  const [picture, setPicture] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>(
    "https://cdn.discordapp.com/attachments/1071077149605384262/1116226931315179560/image.png"
  );

  const encodeFileToBase64 = (fileBlob: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result as string);
        resolve("");
      };
    });
  };
  return (
    <MainDiv>
      <h3>글 작성하기</h3>
      <h4>제목</h4>
      <input
        placeholder="제목을 입력해주세요."
        onChange={(e) => setContent({ ...content, title: e.target.value })}
      />
      <h4>내용</h4>
      <textarea
        placeholder="내용을 입력해주세요."
        onChange={(e) => setContent({ ...content, content: e.target.value })}
      />
      <h4>사진</h4>
      <input
        id="LocalRegisterPageFileInput"
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files) {
            setPicture(e.target.files[0]);
            encodeFileToBase64(e.target.files[0]);
          }
        }}
      />
      <label htmlFor="LocalRegisterPageFileInput">
        <img src={imageSrc} alt="" />
      </label>
      <br />
      <p>
        {
          "업로드 요구 사항\n• 파일 형식: JPEG, PNG, JPG\n• 최대 파일 용량: 10MB"
        }
      </p>
      <div>
        <button onClick={() => router.back()}>취소</button>
        <button
          onClick={() => {
            const formData = new FormData();
            if (picture) formData.append("file", picture);
            if (!Object.values(content).includes("")) {
              formData.append(
                "json-body",
                new Blob([JSON.stringify(content)], {
                  type: "application/json",
                })
              );
              PostAuthPostingApi(formData);
            } else alert("내용을 입력해주세요.");
          }}
        >
          등록
        </button>
      </div>
    </MainDiv>
  );
};
export default RegisterBox;

const MainDiv = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: max-content;
  padding: 50px 360px;

  > div {
    width: 100%;
    text-align: end;
    margin-top: 30px;
    > button {
      color: #fff;
      padding: 10px 40px;
    }
    > button:nth-child(1) {
      background-color: #444444;
    }
    > button:nth-child(2) {
      margin-left: 10px;
      background-color: #de5256;
    }
  }

  > label {
    cursor: pointer;
    > img {
      width: 30%;
    }
  }

  > input {
    width: 100%;
    height: 60px;
  }

  > input,
  > textarea {
    margin-bottom: 60px;
    border: 1px solid #8d8d8d;
    border-radius: 5px;
    padding: 20px 20px;
  }

  > textarea {
    width: 100%;
    height: 300px;
    resize: none;
  }

  > h3 {
    font-size: 24px;
    margin-bottom: 50px;
    font-weight: 600;
  }
  > h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  > p {
    white-space: pre-wrap;
  }
`;
