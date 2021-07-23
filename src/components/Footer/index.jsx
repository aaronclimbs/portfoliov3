import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  // FooterLinksContainer,
  FooterWrap,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={() => scroll.scrollToTop()}>
              Go to top
            </SocialLogo>
            <WebsiteRights>
              (c) Aaron Keisler {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.github.com/aaronclimbs"
                target="_blank"
                aria-label="Github"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.twitter.com/fivesixteen3"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/akeisler"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
