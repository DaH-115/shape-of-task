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
