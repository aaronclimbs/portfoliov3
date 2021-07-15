import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import { FaGithub } from 'react-icons/fa'

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} data-testid="sidebar-container">
        <Icon>
          <CloseIcon onClick={toggleSidebar} data-testid="sidebar-close"/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" data-testid="sidebar-link" onClick={toggleSidebar}>
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
            <SidebarRoute to="/signin" onClick={toggleSidebar} data-testid="sidebar-route">
              {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
              <a href="https://www.github.com/aaronclimbs">
                <FaGithub color="white" size={30} />
              </a>
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
