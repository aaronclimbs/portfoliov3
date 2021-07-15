import { useState } from "react";
import Typewriter from "typewriter-effect";
import Video from "../../assets/videos/dots.mp4";
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
        <div style={{ display: "flex" }}>
          <HeroP>I'm</HeroP>
          <HeroP style={{ paddingLeft: "10px" }}>
            {" "}
            <Typewriter
              options={{
                loop: true,
                strings: [
                  "a <strong>developer</strong>.",
                  "a <strong>climber</strong>.",
                  "a legal <strong>technologist</strong>.",
                  "a constant <strong>learner</strong>.",
                ],
                autoStart: true,
              }}
            />
          </HeroP>
        </div>
        <HeroBtnWrapper>
          <Button
            data-testid="hero-signup-button"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact me! {isHovered ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
