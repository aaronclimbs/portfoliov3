import styled from "styled-components";

export const GoToContainer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  background: #b4adad;
  padding: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: ${({ scrollNav }) => (scrollNav ? 1 : 0)};
`;

export const GoToButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: ${({ scrollNav }) => (scrollNav ? 1 : 0)};
  * {
    transition: all 0.3s ease-in-out;
    opacity: ${({ scrollNav }) => (scrollNav ? 1 : 0)};
  }
`;
