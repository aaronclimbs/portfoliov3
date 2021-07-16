import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Screenshot,
  ScreenshotRow,
  ScreenshotWrap,
} from "./InfoElements";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  topline,
  lightText,
  darkText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  dark,
  dark2,
  screenshots,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    primary={primary ? 1 : 0}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    exact="true"
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <ScreenshotRow>
            {screenshots &&
              screenshots.map((screenshot, index) => (
                <ScreenshotWrap key={index}>
                  <Screenshot src={screenshot.default} alt="" />
                </ScreenshotWrap>
              ))}
          </ScreenshotRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
