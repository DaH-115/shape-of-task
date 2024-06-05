import { useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import { confirmClose } from 'store/modalSlice';
import Modal from 'components/modals/Modal';
import { Title } from 'styles/Title';
import { Btn } from 'styles/Button/Btn';
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
      <Title title='확인' desc={modalDesc} />
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

export default ConfirmModal;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 1rem;
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
