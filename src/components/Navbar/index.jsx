import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLink, MobileIcon, NavBtn, NavBtnLink } from "./NavbarElements"
import { FaBars, FaGithub } from 'react-icons/fa'

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <Nav>
        <NavbarContainer data-testid="nav-container">
          <NavLogo to="/" data-testid="nav-logo">Me</NavLogo>
          <MobileIcon data-testid="nav-mobile-icon">
            <FaBars color="#fff" onClick={toggleSidebar} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about" data-testid="nav-link">about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projects">projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact">contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin' data-testid="nav-route">
              <a href="https://www.github.com/aaronclimbs">
                <FaGithub color="white" size={30} />
              </a>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
