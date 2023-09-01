import React, { ReactNode, useCallback } from 'react';
import styled from 'styled-components';
import { fadeIn, fadeOut } from 'styles/animation-setting';
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
    dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <PortalModal>
      <Backdrop $modaltoggle={modalState} onClick={onModalCloseHandler} />
      <ModalWapper $modaltoggle={modalState}>{children}</ModalWapper>
    </PortalModal>
  );
};

export default React.memo(Modal);

const Backdrop = styled.div<{ $modaltoggle: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(177, 177, 177, 0.5);

  visibility: ${({ $modaltoggle }) => ($modaltoggle ? 'visible' : 'hidden')};
  animation: ${({ $modaltoggle }) => ($modaltoggle ? fadeIn : fadeOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;

const ModalWapper = styled.div<{ $modaltoggle: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.3);
  visibility: ${({ $modaltoggle }) => ($modaltoggle ? 'visible' : 'hidden')};
  animation: ${({ $modaltoggle }) => ($modaltoggle ? fadeIn : fadeOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;

  ${({ theme }) => theme.device.desktop} {
  }
`;
