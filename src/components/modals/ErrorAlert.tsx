import { useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import Modal from 'components/modals/Modal';
import Title from 'components/TitleComponent';
import Btn from 'components/Button/Btn';

const ErrorAlert = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(
    (state) => state.modal.alertState.errorAlertOpen
  );

  const alertCloseHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <Modal isOpen={isOpen}>
      <Title title='알림' desc='문제가 발생했습니다.' />
      <ConfrimBtnWrapper onClick={alertCloseHandler}>
        <Btn type='button' text='확인' />
      </ConfrimBtnWrapper>
    </Modal>
  );
};

export default ErrorAlert;

const ConfrimBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0 1rem;
`;
