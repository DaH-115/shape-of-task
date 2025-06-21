import { useCallback } from 'react';
import { useAppDispatch } from 'store/hooks';
import ConfirmModal from 'components/modals/confirm/ConfirmModal';
import { removeTask } from 'store/taskListSlice';

interface RemoveConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RemoveConfirmModal = ({ isOpen, onClose }: RemoveConfirmModalProps) => {
  const dispatch = useAppDispatch();

  const confirmHandler = useCallback(() => {
    dispatch(removeTask());
  }, [dispatch]);

  return (
    <ConfirmModal
      isOpen={isOpen}
      modalDesc='삭제 하시겠어요?'
      onConfirm={confirmHandler}
      onClose={onClose}
    />
  );
};

export default RemoveConfirmModal;
