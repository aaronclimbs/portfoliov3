import { useState, useEffect } from "react";
import {animateScroll as scroll} from 'react-scroll'
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
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  
  const [scrollNav, setScrollNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer data-testid="nav-container">
          <NavLogo onClick={toggleHome} to="/" data-testid="nav-logo">
            Aaron Keisler
          </NavLogo>
          <MobileIcon data-testid="nav-mobile-icon">
            <FaBars color="#fff" onClick={toggleSidebar} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about" data-testid="nav-link" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>skills</NavLink>
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
