import { FaTimes } from "react-icons/fa";
import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "1" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  transition: 0.3s ease-in-out;
  text-align: center;

  @media screen and (max-width: 768px) {
    transition: 0.3s ease-in-out;
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #887135;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRoute)`
  border-radius: 50px;
  background: #887135;
  white-space: nowrap;
  padding: 16px 32px;
  margin: 0 5px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #171055;
  }
`;

export const SidebarSocialLink = styled.a`
  border-radius: 50px;
  background: #887135;
  white-space: nowrap;
  padding: 10px 22px;
  margin: 0 5px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #887135;
  }
`;
