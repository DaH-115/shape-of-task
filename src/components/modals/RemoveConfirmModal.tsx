import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { confirmClose } from 'store/modalSlice';
import ConfirmModal from 'components/modals/ConfirmModal';
import { removeTask } from 'store/taskListSlice';

const RemoveConfirmModal = () => {
  const dispatch = useAppDispatch();
  const removeModalOpen = useAppSelector(
    (state) => state.modal.confirmState.removeModalOpen
  );

  const confirmHandler = useCallback(() => {
    dispatch(removeTask());
    dispatch(confirmClose());
  }, [dispatch]);

  return (
    <ConfirmModal
      isOpen={removeModalOpen}
      modalDesc='삭제 하시겠어요?'
      confirmHandler={confirmHandler}
    />
  );
};

export default RemoveConfirmModal;
