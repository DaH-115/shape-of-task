import { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
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

export default memo(Modal);

const slideUp = keyframes`
  from {
    top: 60%;
    opacity: 0;
  }
  to {
    top: 50%;
    opacity: 1;
  }
`;

const ModalWapper = styled.div<{ $modalToggle: boolean }>`
  position: fixed;
  top: ${({ $modalToggle }) => ($modalToggle ? '50%' : '80%')};
  left: 50%;
  transform: translate(-50%, -50%); // 중앙 정렬

  width: 100%;
  max-width: ${({ theme }) => theme.size.mobile};
  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.3);

  visibility: ${({ $modalToggle }) => ($modalToggle ? 'visible' : 'hidden')};
  animation: ${({ $modalToggle }) =>
    $modalToggle
      ? css`
          ${slideUp} 0.2s ease-in-out
        `
      : 'none'};
`;
