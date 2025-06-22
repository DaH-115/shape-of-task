import { useCallback } from 'react';
import ConfirmModal from 'components/modals/confirm/ConfirmModal';

interface UpdateConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const UpdateConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
}: UpdateConfirmModalProps) => {
  const confirmHandler = useCallback(() => {
    onConfirm();
  }, [onConfirm]);

  return (
    <ConfirmModal
      isOpen={isOpen}
      modalDesc='Do you want to edit this task?'
      onConfirm={confirmHandler}
      onClose={onClose}
    />
  );
};

export default UpdateConfirmModal;
