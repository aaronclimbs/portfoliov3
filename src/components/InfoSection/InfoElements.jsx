import styled from "styled-components";
import { MdKeyboardArrowUp, MdLandscape } from "react-icons/md";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.p`
  color: #887135;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ScreenshotWrap = styled(ImgWrap)`
  height: 100%;
`;

export const ScreenshotRow = styled(InfoRow)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Screenshot = styled.img`
  padding: 20px;
  object-fit: cover;
  height: 400px;
  width: 100%;
  object-position: 0 0;
  border-radius: 10%;
`;

export const ArrowMountain = styled(MdLandscape)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowUpwards = styled(MdKeyboardArrowUp)`
  margin-left: 8px;
  font-size: 20px;
`;

export const StackContainer = styled.div`
  padding: 5px;
`;

export const StackWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 10px 
    grid-template-columns: repeat(3, 1fr);
  }

`;

export const StackItem = styled.div`
  padding: 5px
`;

export const StackImgWrapper = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    scale: 1.1;
    h3 {
      transition: all 0.2s ease-in-out;
      visibility: visible;
    }
  }
`;

export const StackItemTooltip = styled.h3`
  position: absolute;
  visibility: hidden;
  bottom: -30px;
  
  text-transform: uppercase;
  color: #887135;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#887135" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "7px 24px" : "6px 15px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ big }) => (big ? "14px" : "10px")};
`;

export const StackImg = styled.img`
  height: 75px;
  width: 75px;

  @media screen and (max-width: 420px) {
    height: 50px;
    width: 50px;
`;
