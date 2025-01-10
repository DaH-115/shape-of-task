import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import PortalComponents from 'components/modals/PortalComponents';
import { fadeIn, fadeOut } from 'styles/animation-setting';

export interface MenuProps {
  isOpen: boolean;
  sideMenuHandler: () => void;
}

interface SideMenuProps extends MenuProps {
  children: ReactNode;
}

const SideMenu = ({ isOpen, children, sideMenuHandler }: SideMenuProps) => {
  return (
    <PortalComponents>
      <SideBackdrop $isOpen={isOpen} onClick={sideMenuHandler} />
      <SideMenuContainer $isOpen={isOpen}>{children}</SideMenuContainer>
    </PortalComponents>
  );
};

export default React.memo(SideMenu);

// Animation Setting
const fadeSlideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
  }
  to {
    transform: translateX(0);
    opacity: 1;
    pointer-events: none;
  }
`;

const fadeSlideOut = keyframes`
  from {
      transform: translateX(0);
      opacity: 1;
  }
  to {
      transform: translateX(100%);
      opacity: 0;
  }
`;

const SideMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  padding: 1rem;

  overflow-y: scroll;

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  animation: ${({ $isOpen }) => ($isOpen ? fadeSlideIn : fadeSlideOut)} 0.3s
    ease-in-out;
  transition: visibility 0.3s ease-in-out;
  z-index: 10;

  ${({ theme }) => theme.device.tablet} {
    width: 20rem;
    padding: 0.5rem 2rem;
  }
`;

const SideBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(177, 177, 177, 0.5);

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  transition: visibility 0.3s ease-in-out;
`;
