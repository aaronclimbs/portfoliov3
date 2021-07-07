import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLink, MobileIcon, NavBtn, NavBtnLink } from "./NavbarElements"
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Me</NavLogo>
          <MobileIcon>
            <FaBars color="#fff"/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">/about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projects">/projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact">/contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            {/* <FaGithub/> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
