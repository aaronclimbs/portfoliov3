import { useState } from "react";
import Video from "../../assets/videos/dots.mp4";
import Typewriter from 'typewriter-effect'
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
  ArrowForward,
  ArrowRight,
  TypewriterWrapper,
  HeroPPadded
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const onHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <HeroContainer data-testid="hero-container">
      <HeroBg data-testid="hero-background">
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          data-testid="hero-bg-video"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hey! I'm Aaron.</HeroH1>
        <TypewriterWrapper>
          <HeroP>I'm</HeroP>
          <HeroPPadded> </HeroPPadded>
          <Typewriter
            options={{
              loop: true,
              strings: [
                "a <strong>developer</strong>.",
                "a <strong>climber</strong>.",
                "a <strong>engineer</strong>.",
                "a legal <strong>technologist</strong>.",
                "a <strong>designer</strong>.",
                "a constant <strong>learner</strong>.",
              ],
              autoStart: true,
            }}
          />
        </TypewriterWrapper>
        <HeroP>Please take a look at look at my current/past projects.</HeroP>
        <HeroBtnWrapper>
          <Button
            data-testid="hero-signup-button"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get in touch! {isHovered ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
