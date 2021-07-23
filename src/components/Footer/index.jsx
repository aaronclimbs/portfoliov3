import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
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
            <WebsiteRights>
            © Aaron Keisler {new Date().getFullYear()} All Rights Reserved
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
