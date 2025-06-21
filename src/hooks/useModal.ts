import { useState } from 'react';

/**
 * 모달 상태를 관리하는 커스텀 훅
 *
 * @example
 * const inputModal = useModal();
 * const confirmModal = useModal();
 *
 * return (
 *   <>
 *     <button onClick={inputModal.openHandler}>입력 모달 열기</button>
 *     <Modal isOpen={inputModal.isOpen} onClose={inputModal.closeHandler}>
 *       입력 폼
 *     </Modal>
 *   </>
 * );
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);
  const toggleHandler = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    openHandler,
    closeHandler,
    toggleHandler,
  };
};

/**
 * 메시지가 있는 모달을 관리하는 커스텀 훅 (에러 알림 등)
 *
 * @example
 * const errorModal = useModalWithMessage();
 *
 * const handleError = () => {
 *   errorModal.openHandler('오류가 발생했습니다!');
 * };
 *
 * return (
 *   <ErrorModal
 *     isOpen={errorModal.isOpen}
 *     message={errorModal.message}
 *     onClose={errorModal.closeHandler}
 *   />
 * );
 */
export const useModalWithMessage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openHandler = (msg: string) => {
    setMessage(msg);
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
    setMessage('');
  };

  return {
    isOpen,
    message,
    openHandler,
    closeHandler,
  };
};
