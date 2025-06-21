import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import PortalComponents from 'components/modals/PortalComponents';
import Backdrop from 'components/modals/Backdrop';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <PortalComponents>
      <Backdrop isOpen={isOpen} onClose={onClose} />
      <ModalWrapper $modalToggle={isOpen}>{children}</ModalWrapper>
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

const ModalWrapper = styled.div<{ $modalToggle: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001; /* 헤더(50), 백드롭(1000)보다 높게 설정 */

  width: 95%;
  max-width: 100%;
  padding: 0.8rem;

  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.06);

  visibility: ${({ $modalToggle }) => ($modalToggle ? 'visible' : 'hidden')};
  animation: ${({ $modalToggle }) => ($modalToggle ? slideUp : slideDown)} 0.25s
    ease-out forwards;

  /* 반응형 스타일 */
  ${({ theme }) => theme.device.sm} {
    width: 85%;
    max-width: 420px;
    padding: 1rem;
  }

  ${({ theme }) => theme.device.md} {
    width: 75%;
    max-width: 480px;
  }

  ${({ theme }) => theme.device.lg} {
    width: 60%;
    max-width: 520px;
  }

  ${({ theme }) => theme.device.xl} {
    width: 50%;
    max-width: 560px;
  }
`;
