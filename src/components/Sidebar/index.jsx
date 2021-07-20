import { useState } from "react";

import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  // SidebarRoute,
  SidebarSocialLink,
} from "./SidebarElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = ({ toggleSidebar, isOpen }) => {
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
      <SidebarContainer isOpen={isOpen} data-testid="sidebar-container">
        <Icon>
          <CloseIcon onClick={toggleSidebar} data-testid="sidebar-close" />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              data-testid="sidebar-link"
              onClick={toggleSidebar}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
            >
              About
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggleSidebar}

                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
            >
              Skills
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggleSidebar}
            
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
            >
              Projects
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarSocialLink
              href="https://www.github.com/aaronclimbs"
              data-testid="sidebar-route"
              onMouseEnter={handleGithubHover}
              onMouseLeave={handleGithubHover}
              rel="noopener noreferrer"
            >
              <FaGithub color={isGithubHovered ? "black" : "white"} size={30} />
            </SidebarSocialLink>
            <SidebarSocialLink
              onMouseEnter={handleLinkedInHover}
              onMouseLeave={handleLinkedInHover}
              href="https://www.linkedin.com/in/akeisler"
              data-testid="nav-route"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                color={isLinkedInHovered ? "black" : "white"}
                size={30}
              />
            </SidebarSocialLink>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
