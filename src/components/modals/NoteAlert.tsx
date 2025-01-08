import { useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import Modal from 'components/modals/Modal';
import Btn from 'components/Button/Btn';

const NoteAlert = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(
    (state) => state.modal.alertState.noteAlertOpen
  );

  const alertCloseHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <Modal isOpen={isOpen}>
      <AlertTitle>알림</AlertTitle>
      <AlertDesc>등록되었습니다</AlertDesc>
      <ConfrimBtnWrapper onClick={alertCloseHandler}>
        <Btn type='button' text='확인' />
      </ConfrimBtnWrapper>
    </Modal>
  );
};

export default NoteAlert;

const AlertTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const AlertDesc = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ConfrimBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
