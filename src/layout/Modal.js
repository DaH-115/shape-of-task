import React from 'react';
import styled, { keyframes } from 'styled-components';
import PortalModal from '../components/PortalModal';

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <PortalModal>
      <Backdrop modalToggle={isOpen} onClick={onClose} />
      <ModalWapper modalToggle={isOpen}>{children}</ModalWapper>
    </PortalModal>
  );
};

export default React.memo(Modal);

// *animation setting
const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
// animation setting*

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(177, 177, 177, 0.8);

  visibility: ${({ modalToggle }) => (modalToggle ? 'visible' : 'hidden')};
  animation: ${({ modalToggle }) => (modalToggle ? fadeIn : fadeOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;

const ModalWapper = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 90%;

  visibility: ${({ modalToggle }) => (modalToggle ? 'visible' : 'hidden')};
  animation: ${({ modalToggle }) => (modalToggle ? fadeIn : fadeOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;

  ${({ theme }) => theme.device.desktop} {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 50%;
  }
`;
