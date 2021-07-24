import { useState } from "react";
import Video from "../../assets/videos/dots.mp4";
import Typewriter from "typewriter-effect";
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
  HeroPPadded,
  ScrollDownWrapper,
  ScrollDown,
} from "./HeroElements";
import { ButtonExt } from "../ButtonElement";
import { FaChevronDown } from "react-icons/fa";

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
          alt="Dots"
        />
      </HeroBg>
      <HeroContent>
        <div>
          <HeroH1>Welcome!</HeroH1>
        </div>
        <TypewriterWrapper>
          <HeroP>I'm</HeroP>
          <HeroPPadded> </HeroPPadded>
          <Typewriter
            options={{
              loop: true,
              strings: [
                "a <strong>developer</strong>.",
                "a <strong>climber</strong>.",
                "an <strong>engineer</strong>.",
                "a legal <strong>technologist</strong>.",
                "a <strong>designer</strong>.",
                "a constant <strong>learner</strong>.",
              ],
              autoStart: true,
            }}
          />
        </TypewriterWrapper>
        <HeroBtnWrapper>
          <ButtonExt
            href="mailto:aaron@keisler.dev"
            data-testid="hero-signup-button"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Please send me a message to connect.{" "}
            {isHovered ? <ArrowForward /> : <ArrowRight />}
          </ButtonExt>
        </HeroBtnWrapper>
        <ScrollDownWrapper>
          <ScrollDown
            to="about"
            data-testid="scroll-link"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <FaChevronDown size={30} color={"white"} />
          </ScrollDown>
        </ScrollDownWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
