import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    padding: 20px;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
        padding: 0
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin-bottom: 0.25rem;
    font-size: 15px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out
    }
`

export const FooterLinkA = styled(Link)`
    padding: 5px
`
export const SocialMedia = styled.div`
`

export const SocialMediaWrap = styled.div`
`;

export const SocialLogo = styled(Link)`
`;

export const WebsiteRight = styled.p`
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SocialIconLink = styled.a`
    margin: 0 5px;
`;