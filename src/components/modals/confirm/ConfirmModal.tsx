import { memo, useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import Modal from 'components/modals/Modal';
import Btn from 'components/buttons/Btn';
import { editingTaskReset } from 'store/taskListSlice';

interface ConfirmModalProps {
  isOpen: boolean;
  modalDesc: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmModal = ({
  isOpen,
  modalDesc,
  onConfirm,
  onClose,
}: ConfirmModalProps) => {
  const dispatch = useAppDispatch();

  const closeHandler = useCallback(() => {
    onClose();
    dispatch(editingTaskReset());
  }, [onClose, dispatch]);

  const confirmHandler = useCallback(() => {
    onConfirm();
    onClose();
  }, [onConfirm, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={closeHandler} size='small'>
      <AlertTitle>Confirm</AlertTitle>
      <AlertDesc>{modalDesc}</AlertDesc>
      <BtnWrapper>
        <RejectBtnWrapper onClick={closeHandler}>
          <Btn type='button' text='Cancel' variant='outline' />
        </RejectBtnWrapper>
        <ConfrimBtnWrapper onClick={confirmHandler}>
          <Btn type='button' text='Confirm' />
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
