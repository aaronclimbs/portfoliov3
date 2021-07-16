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
            >
              About
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggleSidebar}>
              Projects
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggleSidebar}>
              Contacts
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggleSidebar}>
              Signup
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            {/* <SidebarRoute to="/signin" onClick={toggleSidebar}>
              Sign in
            </SidebarRoute> */}
            <SidebarSocialLink
              href="https://www.github.com/aaronclimbs"
              data-testid="sidebar-route"
              onMouseEnter={handleGithubHover}
              onMouseLeave={handleGithubHover}
            >
              <FaGithub color={isGithubHovered ? "black" : "white"} size={30} />
            </SidebarSocialLink>
            <SidebarSocialLink
              onMouseEnter={handleLinkedInHover}
              onMouseLeave={handleLinkedInHover}
              href="https://www.linkedin.com/in/akeisler"
              data-testid="nav-route"
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
