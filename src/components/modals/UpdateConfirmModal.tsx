import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { InputModalOpen, confirmClose } from 'store/modalSlice';
import ConfirmModal from 'components/modals/ConfirmModal';

const UpdateConfirmModal = () => {
  const dispatch = useAppDispatch();
  const updateModalOpen = useAppSelector(
    (state) => state.modal.confirmState.updateModalOpen
  );

  const confirmHandler = useCallback(() => {
    dispatch(InputModalOpen());
    dispatch(confirmClose());
  }, [dispatch]);

  return (
    <ConfirmModal
      isOpen={updateModalOpen}
      modalDesc='수정 하시겠어요?'
      confirmHandler={confirmHandler}
    />
  );
};

export default UpdateConfirmModal;
