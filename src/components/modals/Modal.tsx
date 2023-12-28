import React from 'react';
import styled from 'styled-components';
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

const ModalWapper = styled.div<{ $modalToggle: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 0 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.3);

  visibility: ${({ $modalToggle }) => ($modalToggle ? 'visible' : 'hidden')};
  animation: ${({ $modalToggle }) => ($modalToggle ? fadeIn : fadeOut)} 0.3s
    ease-in-out;
  transition: visibility 0.3s ease-in-out;

  ${({ theme }) => theme.device.tablet} {
    width: auto;
  }
`;
