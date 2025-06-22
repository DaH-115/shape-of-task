import { useCallback } from 'react';
import { styled } from 'styled-components';
import Modal from 'components/modals/Modal';
import Btn from 'components/buttons/Btn';

interface NoteAlertProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const NoteAlert = ({
  isOpen,
  onClose,
  message = '등록되었습니다',
}: NoteAlertProps) => {
  const alertCloseHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} size='small'>
      <AlertTitle>Success</AlertTitle>
      <AlertDesc>{message}</AlertDesc>
      <ConfrimBtnWrapper onClick={alertCloseHandler}>
        <Btn type='button' text='OK' />
      </ConfrimBtnWrapper>
    </Modal>
  );
};

export default NoteAlert;

const AlertTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const AlertDesc = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ConfrimBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
