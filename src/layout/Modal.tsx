import React, { ReactNode, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { modalIsClose } from 'store/modalSlice';
import { useAppDispatch } from 'store/hooks';
import PortalModal from 'components/PortalModal';

interface ModalProps {
  children: ReactNode;
  modalState: boolean;
}

const Modal = ({ children, modalState }: ModalProps) => {
  const dispatch = useAppDispatch();

  const onModalCloseHandler = useCallback(() => {
    return dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <PortalModal>
      <Backdrop $modaltoggle={modalState} onClick={onModalCloseHandler} />
      <ModalWapper $modaltoggle={modalState}>{children}</ModalWapper>
    </PortalModal>
  );
};

export default React.memo(Modal);

// Animation Setting
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

const Backdrop = styled.div<{ $modaltoggle: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(177, 177, 177, 0.8);

  visibility: ${({ $modaltoggle }) => ($modaltoggle ? 'visible' : 'hidden')};
  animation: ${({ $modaltoggle }) => ($modaltoggle ? fadeIn : fadeOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;

const ModalWapper = styled.div<{ $modaltoggle: boolean }>`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);

  width: 90%;

  visibility: ${({ $modaltoggle }) => ($modaltoggle ? 'visible' : 'hidden')};
  animation: ${({ $modaltoggle }) => ($modaltoggle ? fadeIn : fadeOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;

  ${({ theme }) => theme.device.desktop} {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 50%;
  }
`;
