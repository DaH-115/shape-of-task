import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import PortalComponents from 'components/modals/PortalComponents';
import Backdrop from 'components/modals/Backdrop';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  small?: boolean;
}

const Modal = ({ children, isOpen, onClose, small = false }: ModalProps) => {
  return (
    <PortalComponents>
      <Backdrop isOpen={isOpen} onClose={onClose} />
      <ModalWrapper $modalToggle={isOpen} $small={small}>
        {children}
      </ModalWrapper>
    </PortalComponents>
  );
};

export default memo(Modal);

const slideUp = keyframes`
  from {
    transform: translate(-50%, -40%) scale(0.9);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -40%) scale(0.9);
    opacity: 0;
  }
`;

const ModalWrapper = styled.div<{
  $modalToggle: boolean;
  $small: boolean;
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  width: 90%;
  max-width: ${({ $small }) => ($small ? '12rem' : '20rem')};
  padding: 0.8rem;

  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.06);

  visibility: ${({ $modalToggle }) => ($modalToggle ? 'visible' : 'hidden')};
  animation: ${({ $modalToggle }) => ($modalToggle ? slideUp : slideDown)} 0.25s
    ease-out forwards;

  ${({ theme }) => theme.device.sm} {
    max-width: ${({ $small }) => ($small ? '13rem' : '22rem')};
  }

  ${({ theme }) => theme.device.md} {
    max-width: ${({ $small }) => ($small ? '14rem' : '24rem')};
  }
`;
