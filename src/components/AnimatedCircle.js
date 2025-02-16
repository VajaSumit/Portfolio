import styled from "styled-components";

 export const AnimatedCircle = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  filter: blur(10px);
  z-index: -1;
  
  /* Rotating animation */
  animation: rotate 8s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 960px) {
    width: 300px;
    height: 300px;
  }
`;

// export default AnimatedCircle;