import { Button, ButtonExt } from "../ButtonElement";
import { useState } from "react";
import { animateScroll as scroll } from 'react-scroll'
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
  ArrowMountain,
  ArrowUpwards,
  StackContainer,
  StackWrapper,
  StackItem,
  StackImgWrapper,
  StackItemTooltip,
  StackImg
} from "./ProjectElements";
import { techIcons } from "./Data"

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
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => setIsHovered(!isHovered);

  return (
    <>
      <ProjectContainer id="projects" lightBg={lightBg}>
        <ProjectWrapper>
          <ProjectRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    onClick={() => scroll.scrollToTop()}
                    to="home"
                    primary={primary ? 1 : 0}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    exact="true"
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                  >
                    Scroll back up{" "}
                    {isHovered ? <ArrowMountain /> : <ArrowUpwards />}
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  {liveLink && (
                    <ButtonExt
                      href={liveLink}
                      primary={primary ? 1 : 0}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      exact="true"
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
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
                    >
                      Repo
                    </ButtonExt>
                  )}
                </BtnWrap>
                <StackContainer>
                  <StackWrapper>
                      {stack.map((item, index) => {
                        return(<StackItem key={index}>
                      <StackImgWrapper>
                        <StackItemTooltip primary={primary ? 1 : 0} darkText={darkText}>{techIcons[item].name}</StackItemTooltip>
                        <StackImg title={techIcons[item].name} src={techIcons[item].img.default} alt={`${techIcons[item].name}-img`} />
                      </StackImgWrapper>
                    </StackItem>)})}
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
                  <Screenshot src={screenshot.default} alt="" />
                </ScreenshotWrap>
              ))}
          </ScreenshotRow>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
