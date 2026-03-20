import { useCallback } from "react";
import { styled } from "styled-components";
import Modal from "@/components/modals/Modal";
import Button from "@/components/buttons/Button";

interface NoteAlertProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const NoteAlert = ({
  isOpen,
  onClose,
  message = "등록되었습니다",
}: NoteAlertProps) => {
  const alertCloseHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onClose={alertCloseHandler} small>
      <AlertTitle>Success</AlertTitle>
      <AlertDesc>{message}</AlertDesc>
      <ConfirmBtnWrapper onClick={alertCloseHandler}>
        <Button type="button" text="OK" />
      </ConfirmBtnWrapper>
    </Modal>
  );
};

export default NoteAlert;

const AlertTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const AlertDesc = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  padding: 0.5rem 0;
`;

const ConfirmBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
