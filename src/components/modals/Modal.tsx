import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { fadeIn, fadeOut } from 'styles/animation-setting';
import PortalComponents from 'components/modals/PortalComponents';
import Backdrop from 'components/modals/Backdrop';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  return (
    <PortalComponents>
      <Backdrop isOpen={isOpen} />
      <ModalWapper $modalToggle={isOpen}>{children}</ModalWapper>
    </PortalComponents>
  );
};

export default React.memo(Modal);

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ModalWapper = styled.div<{ $modalToggle: boolean }>`
  position: fixed;
  top: ${({ $modalToggle }) => ($modalToggle ? '50%' : '100%')};
  left: 50%;
  transform: ${({ $modalToggle }) =>
    $modalToggle ? 'translate(-50%, -50%)' : 'translate(-50%, 100%)'};

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 0 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.3);

  visibility: ${({ $modalToggle }) => ($modalToggle ? 'visible' : 'hidden')};
  animation: ${({ $modalToggle }) =>
      $modalToggle
        ? css`
            ${fadeIn} 0.3s ease-in-out, ${slideUp} 0.3s ease-in-out
          `
        : fadeOut}
    0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.device.tablet} {
    transform: translate(-50%, -50%);
    width: auto;
  }
`;
