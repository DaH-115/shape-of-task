import { useCallback } from 'react';
import { useAppDispatch } from '@/store/hooks';
import ConfirmModal from '@/components/modals/confirm/ConfirmModal';
import { removeTask } from '@/store/taskListSlice';

interface RemoveConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** 삭제할 태스크 ID (모달 열 때 명시적으로 전달) */
  taskIdToRemove: string;
}

const RemoveConfirmModal = ({
  isOpen,
  onClose,
  taskIdToRemove,
}: RemoveConfirmModalProps) => {
  const dispatch = useAppDispatch();

  const confirmHandler = useCallback(() => {
    if (taskIdToRemove) {
      dispatch(removeTask(taskIdToRemove));
    }
    onClose();
  }, [dispatch, taskIdToRemove, onClose]);

  return (
    <ConfirmModal
      isOpen={isOpen}
      modalDesc='Do you want to delete this task?'
      onConfirm={confirmHandler}
      onClose={onClose}
    />
  );
};

export default RemoveConfirmModal;
