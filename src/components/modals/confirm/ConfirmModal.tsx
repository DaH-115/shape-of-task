import { memo, useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import { confirmClose } from 'store/modalSlice';
import Modal from 'components/modals/Modal';
import Btn from 'components/Button/Btn';
import { editingTaskReset } from 'store/taskListSlice';

interface ConfirmModalProps {
  isOpen: boolean;
  modalDesc: string;
  confirmHandler: () => void;
}

const ConfirmModal = ({
  isOpen,
  modalDesc,
  confirmHandler,
}: ConfirmModalProps) => {
  const dispatch = useAppDispatch();

  const closeHandler = useCallback(() => {
    dispatch(confirmClose());
    dispatch(editingTaskReset());
  }, [dispatch]);

  return (
    <Modal isOpen={isOpen}>
      <AlertTitle>알림</AlertTitle>
      <AlertDesc>{modalDesc}</AlertDesc>
      <BtnWrapper>
        <RejectBtnWrapper onClick={closeHandler}>
          <Btn type='button' text='취소' isEmpty />
        </RejectBtnWrapper>
        <ConfrimBtnWrapper onClick={confirmHandler}>
          <Btn type='button' text='확인' />
        </ConfrimBtnWrapper>
      </BtnWrapper>
    </Modal>
  );
};

export default memo(ConfirmModal);

const AlertTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const AlertDesc = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ConfrimBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const RejectBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-right: 0.4rem;
`;
