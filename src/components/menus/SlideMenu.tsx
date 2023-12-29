import React from 'react';
import styled, { keyframes } from 'styled-components';
import PortalComponents from 'components/modals/PortalComponents';
import { fadeIn, fadeOut } from 'styles/animation-setting';

export interface MenuProps {
  isOpen: boolean;
  slideMenuHandler: () => void;
}

interface SlideMenuProps extends MenuProps {
  children: React.ReactNode;
}

const SlideMenu = ({ isOpen, children, slideMenuHandler }: SlideMenuProps) => {
  return (
    <PortalComponents>
      <SlideBackdrop $isOpen={isOpen} onClick={slideMenuHandler} />
      <SlideMenuContainer $isOpen={isOpen}>{children}</SlideMenuContainer>
    </PortalComponents>
  );
};

export default React.memo(SlideMenu);

// For Slide Menu Animation Setting
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

const SlideMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  height: 100%;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  padding: 1rem 2rem;

  overflow-y: scroll;

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  animation: ${({ $isOpen }) => ($isOpen ? fadeSlideIn : fadeSlideOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;

  ${({ theme }) => theme.device.tablet} {
    width: 40%;
    padding: 1rem 2rem;
  }
`;

const SlideBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(177, 177, 177, 0.5);

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.4s ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;
