import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

// export const Img = styled.img`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   max-width: 400px;
//   max-height: 400px;
//   border-radius: 50%;
//   border: 2px solid ${({ theme }) => theme.primary};
//   transition: all 0.4s ease-in-out; /* Smooth hover effect */
//   animation: float 3s ease-in-out infinite;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0px 0px 20px ${({ theme }) => theme.primary},
//                 0px 0px 40px ${({ theme }) => theme.primary + 50};
//     filter: brightness(1.2);
//   }

    
//   @media (max-width: 768px) {
//     max-width: 400px;
//     max-height: 400px;
//   }

//   @media (max-width: 640px) {
//     max-width: 280px;
//     max-height: 280px;
//   }
// `;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: all 0.4s ease-in-out;
  animation: float 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px ${({ theme }) => theme.primary},
                0px 0px 40px ${({ theme }) => theme.primary + 50};
    filter: brightness(1.2);
  }

  /* Touch animation for mobile */
  &.touch-active {
    transform: scale(1.2);
    box-shadow: 0px 0px 30px ${({ theme }) => theme.primary};
    filter: brightness(1.4);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;


export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

export const InfoItem = styled.p`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #ccc;
    
    svg {
        margin-right: 10px;
        color: #ffffff;
    }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

// export const ResumeButton = styled.a`
//     -webkit-appearance: button;
//     -moz-appearance: button;
//     appearance: button;
//     text-decoration: none;
//     width: 95%;
//     max-width: 300px;
//     text-align: center;
//     padding: 16px 0;
//     color:${({ theme }) => theme.white};
//     border-radius: 20px;
//     cursor: pointer;
//     font-size: 20px;
//     font-weight: 600;
//     transition: all 0.2s ease-in-out !important;
//     background: hsla(271, 100%, 50%, 1);
//     background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//     background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//     background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//     box-shadow:  20px 20px 60px #1F2634,
//     -20px -20px 60px #1F2634;
//     &:hover {
//         transform: scale(1.05);
//     transition: all 0.4s ease-in-out;
//     box-shadow:  20px 20px 60px #1F2634,
//     filter: brightness(1);
//     }    
    
    
//     @media (max-width: 640px) {
//         padding: 12px 0;
//         font-size: 18px;
//     } 

// `;

// export const ResumeButton = styled.a`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 8px;
//     background: linear-gradient(135deg, #6e48aa, #9d50bb);
//     color: white;
//     padding: 12px 20px;
//     border-radius: 8px;
//     font-size: 16px;
//     text-decoration: none;
//     font-weight: bold;
//     margin-top: 20px;
//     transition: all 0.3s ease-in-out;

//     svg {
//         font-size: 20px;
//     }

//     &:hover {
//         background: linear-gradient(135deg, #9d50bb, #6e48aa);
//         transform: scale(1.05);
//     }
// `;



// export const SocialMediaIcons = styled.div`
//     display: flex;
//     gap: 15px;
//     margin-top: 15px;
// `;

// export const SocialMediaIcon = styled.a`
//     color: ${({ theme }) => theme.text_primary};
//     font-size: 24px;
//     transition: transform 0.3s ease-in-out;
    
//     &:hover {
//         transform: scale(1.2);
//         color: ${({ theme }) => theme.primary};
//     }
// `;


export const ResumeButton = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #6e48aa, #9d50bb);
    color: white;
    padding: 10px 18px;
    border-radius: 6px;
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    svg {
        font-size: 20px;
    }

    &:hover {
        background: linear-gradient(135deg, #9d50bb, #6e48aa);
        transform: scale(1.05);
    }
`;

export const SocialMediaIcons = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: 768px) {
        gap: 8px;
    }
`;

export const SocialMediaIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #2d2e32;
    color: white;
    border-radius: 50%;
    font-size: 18px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #9d50bb;
        transform: scale(1.1);
    }
`;
