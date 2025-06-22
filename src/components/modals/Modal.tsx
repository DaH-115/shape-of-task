import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import PortalComponents from 'components/modals/PortalComponents';
import Backdrop from 'components/modals/Backdrop';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const Modal = ({ children, isOpen, onClose, size = 'medium' }: ModalProps) => {
  return (
    <PortalComponents>
      <Backdrop isOpen={isOpen} onClose={onClose} />
      <ModalWrapper $modalToggle={isOpen} $size={size}>
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
  $size: 'small' | 'medium' | 'large';
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001; /* 헤더(50), 백드롭(1000)보다 높게 설정 */

  width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '90%';
      case 'large':
        return '98%';
      default:
        return '95%';
    }
  }};
  max-width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '320px';
      case 'large':
        return '800px';
      default:
        return '100%';
    }
  }};
  padding: 0.8rem;

  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.06);

  visibility: ${({ $modalToggle }) => ($modalToggle ? 'visible' : 'hidden')};
  animation: ${({ $modalToggle }) => ($modalToggle ? slideUp : slideDown)} 0.25s
    ease-out forwards;

  /* 반응형 스타일 */
  ${({ theme, $size }) => theme.device.sm} {
    width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '80%';
        case 'large':
          return '90%';
        default:
          return '85%';
      }
    }};
    max-width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '350px';
        case 'large':
          return '700px';
        default:
          return '420px';
      }
    }};
    padding: 1rem;
  }

  ${({ theme, $size }) => theme.device.md} {
    width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '60%';
        case 'large':
          return '85%';
        default:
          return '75%';
      }
    }};
    max-width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '380px';
        case 'large':
          return '650px';
        default:
          return '480px';
      }
    }};
  }

  ${({ theme, $size }) => theme.device.lg} {
    width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '45%';
        case 'large':
          return '80%';
        default:
          return '60%';
      }
    }};
    max-width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '400px';
        case 'large':
          return '750px';
        default:
          return '520px';
      }
    }};
  }

  ${({ theme, $size }) => theme.device.xl} {
    width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '35%';
        case 'large':
          return '70%';
        default:
          return '50%';
      }
    }};
    max-width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '420px';
        case 'large':
          return '800px';
        default:
          return '560px';
      }
    }};
  }
`;
