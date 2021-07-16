import { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
  NavBtn,
  // NavBtnLink,
  NavSocialLink,
} from "./NavbarElements";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  const [isGithubHovered, setGithubHovered] = useState(false);
  const [isLinkedInHovered, setLinkedInHovered] = useState(false);

  const handleGithubHover = () => {
    setGithubHovered(!isGithubHovered);
  };

  const handleLinkedInHover = () => {
    setLinkedInHovered(!isLinkedInHovered);
  };

  return (
    <>
      <Nav>
        <NavbarContainer data-testid="nav-container">
          <NavLogo to="/" data-testid="nav-logo">
            Me
          </NavLogo>
          <MobileIcon data-testid="nav-mobile-icon">
            <FaBars color="#fff" onClick={toggleSidebar} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about" data-testid="nav-link">
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projects">projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact">contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {/* <NavBtnLink to="/signin" data-testid="nav-btn-link">Sign in</NavBtnLink> */}
            <NavSocialLink
              onMouseEnter={handleGithubHover}
              onMouseLeave={handleGithubHover}
              href="https://www.github.com/aaronclimbs"
              data-testid="nav-route"
            >
              <FaGithub color={isGithubHovered ? "black" : "white"} size={30} />
            </NavSocialLink>
            <NavSocialLink
              onMouseEnter={handleLinkedInHover}
              onMouseLeave={handleLinkedInHover}
              href="https://www.linkedin.com/in/akeisler"
              data-testid="nav-route"
            >
              <FaLinkedin
                color={isLinkedInHovered ? "black" : "white"}
                size={30}
              />
            </NavSocialLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
