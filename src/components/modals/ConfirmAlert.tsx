import { useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import { removeTask } from 'store/taskListSlice';
import Modal from 'components/modals/Modal';
import { Title } from 'styles/Title';
import { Btn } from 'styles/Button/Btn';

const ConfirmAlert = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.confirmState.isOpen);
  const isTodoId = useAppSelector((state) => state.modal.confirmState.isTodoId);

  const confirmHandler = useCallback(() => {
    dispatch(removeTask(isTodoId));
    dispatch(modalIsClose());
  }, [dispatch, isTodoId]);

  const closeHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <Modal isOpen={isOpen}>
      <Title title='확인' desc='정말 지우시겠어요?' />
      <BtnWrapper>
        <RejectBtnWrapper onClick={closeHandler}>
          <Btn type='button' text='취소' isEmpty />
        </RejectBtnWrapper>
        <ConfrimBtnWrapper onClick={confirmHandler}>
          <Btn type='button' text='삭제' />
        </ConfrimBtnWrapper>
      </BtnWrapper>
    </Modal>
  );
};

export default ConfirmAlert;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
`;

const ConfrimBtnWrapper = styled.div`
  width: 100%;
`;

const RejectBtnWrapper = styled.div`
  width: 100%;
  margin-right: 0.6rem;
`;
