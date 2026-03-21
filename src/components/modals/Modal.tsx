import { memo } from "react";
import styled, { keyframes } from "styled-components";
import Portal from "@/components/modals/PortalComponent";
import Backdrop from "@/components/modals/Backdrop";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  small?: boolean;
}

const Modal = ({ children, isOpen, onClose, small = false }: ModalProps) => {
  return (
    <Portal>
      <Backdrop isOpen={isOpen} onClose={onClose} />
      <ModalWrapper $modalToggle={isOpen} $small={small}>
        {children}
      </ModalWrapper>
    </Portal>
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
  max-width: ${({ $small }) => ($small ? "12rem" : "20rem")};
  padding: 0.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.commonColors.surface};
  box-shadow: ${({ theme }) => theme.shadows.modal};

  visibility: ${({ $modalToggle }) => ($modalToggle ? "visible" : "hidden")};
  animation: ${({ $modalToggle }) => ($modalToggle ? slideUp : slideDown)} 0.25s
    ease-out forwards;

  ${({ theme }) => theme.device.sm} {
    max-width: ${({ $small }) => ($small ? "13rem" : "22rem")};
  }

  ${({ theme }) => theme.device.md} {
    max-width: ${({ $small }) => ($small ? "14rem" : "24rem")};
  }
`;
