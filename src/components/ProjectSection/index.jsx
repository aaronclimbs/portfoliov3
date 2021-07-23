import { ButtonExt } from "../ButtonElement";
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
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
  StackContainer,
  StackWrapper,
  StackItem,
  StackImgWrapper,
  StackItemTooltip,
  StackImg,
} from "./ProjectElements";
import { techIcons } from "./Data";

const ProjectSection = ({
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
  liveLink,
  repoLink,
  stack,
  darker
}) => {

  return (
    <>
      <ProjectContainer lightBg={lightBg}>
        <ProjectWrapper>
          <ProjectRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine darker={darker}>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {liveLink && (
                    <ButtonExt
                      href={liveLink}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                rel="noopener noreferrer"
                    >
                      Live
                    </ButtonExt>
                  )}
                  {repoLink && (
                    <ButtonExt
                      href={repoLink}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                rel="noopener noreferrer"
                    >
                      Repo
                    </ButtonExt>
                  )}
                </BtnWrap>
                <StackContainer>
                  <StackWrapper>
                    {stack.map((item, index) => {
                      return (
                        <StackItem key={index}>
                          <StackImgWrapper>
                            <StackItemTooltip
                              primary={primary ? 1 : 0}
                              darkText={darkText}
                              dark={dark}
                            >
                              {techIcons[item].name}
                            </StackItemTooltip>
                            <StackImg
                              title={techIcons[item].name}
                              src={techIcons[item].img.default}
                              alt={`${techIcons[item].name}-img`}
                            />
                          </StackImgWrapper>
                        </StackItem>
                      );
                    })}
                  </StackWrapper>
                </StackContainer>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </ProjectRow>
          <ScreenshotRow>
            {screenshots &&
              screenshots.map((screenshot, index) => (
                <ScreenshotWrap key={index}>
                  <Screenshot src={screenshot.default} alt={`${headline}-screenshot-${index + 1}`} />
                </ScreenshotWrap>
              ))}
          </ScreenshotRow>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
