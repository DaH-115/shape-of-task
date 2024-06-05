import { useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import Modal from 'components/modals/Modal';
import { Title } from 'styles/Title';
import { Btn } from 'styles/Button/Btn';

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
      <Title title='알림' desc='등록되었습니다.' />
      <ConfrimBtnWrapper onClick={alertCloseHandler}>
        <Btn type='button' text='확인' />
      </ConfrimBtnWrapper>
    </Modal>
  );
};

export default NoteAlert;

const ConfrimBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0 1rem;
`;
