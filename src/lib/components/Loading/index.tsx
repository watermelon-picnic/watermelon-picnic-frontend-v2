import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Spinner = () => {
  return (
    <_BackGround>
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          fill="none"
          stroke-width="7"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="27"
        ></circle>
      </svg>
    </_BackGround>
  );
};

const Dash = keyframes`
   0% { stroke-dashoffset: 187; }
 50% {
   stroke-dashoffset: 46.75;
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: 187;
 }
`;

const Rotator = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const _BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: #f8f8f9;

  svg {
    animation: ${Rotator} 1.4s linear infinite;
  }

  circle {
    stroke-dasharray: 130;
    stroke-dashoffset: 0;
    transform-origin: center;
    /* animation: ${Dash} 1.4s ease-in-out infinite; */
    stroke: #de5256;
  }
`;
