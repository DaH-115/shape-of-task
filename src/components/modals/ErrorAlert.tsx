import { useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { errorAlertCloseHandler } from 'store/modalSlice';
import Modal from 'components/modals/Modal';
import Btn from 'components/buttons/Btn';

const ErrorAlert = () => {
  const dispatch = useAppDispatch();
  const { isOpen: alertOpen, message: alertMessage } = useAppSelector(
    (state) => state.modal.errorAlert
  );

  const alertCloseHandler = useCallback(() => {
    dispatch(errorAlertCloseHandler());
  }, [dispatch]);

  return (
    <Modal isOpen={alertOpen} onClose={alertCloseHandler} size='small'>
      <AlertTitle>알림</AlertTitle>
      <AlertDesc>{alertMessage}</AlertDesc>
      <ConfrimBtnWrapper onClick={alertCloseHandler}>
        <Btn type='button' text='확인' />
      </ConfrimBtnWrapper>
    </Modal>
  );
};

export default ErrorAlert;

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
  padding: 0 0 1rem;
`;
