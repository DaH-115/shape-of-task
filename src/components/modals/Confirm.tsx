import { useCallback } from 'react';
import { styled } from 'styled-components';
import StyledBtn from 'styles/StyledBtn';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import { removeTask } from 'store/taskListSlice';
import PortalComponents from 'components/modals/PortalComponents';
import Backdrop from 'components/modals/Backdrop';

const Confirm = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.confirmState.isOpen);
  const isTodoId = useAppSelector((state) => state.modal.confirmState.isTodoId);

  const confirmCheckedHandler = useCallback(() => {
    dispatch(removeTask(isTodoId));
    dispatch(modalIsClose());
  }, [dispatch, isTodoId]);

  const confirmCloseHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <PortalComponents>
      <Backdrop isopen={isOpen} />
      <ConfirmWrapper>
        <MessageWrapper>
          <ConfirmTitle>{'확인'}</ConfirmTitle>
          <ConfirmDesc>{'정말 지우시겠어요?'}</ConfirmDesc>
          <BtnWrapper>
            <ConfirmBtn onClick={confirmCheckedHandler}>{'예'}</ConfirmBtn>
            <StyledBtn onClick={confirmCloseHandler}>{'아니요'}</StyledBtn>
          </BtnWrapper>
        </MessageWrapper>
      </ConfirmWrapper>
    </PortalComponents>
  );
};

export default Confirm;

const ConfirmWrapper = styled.div`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 1rem;
  z-index: 999;
`;

const MessageWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  font-size: 1.2rem;

  padding: 1rem 1.2rem;

  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 1.5rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);

  ${({ theme }) => theme.device.tablet} {
    width: 30%;
    font-size: 1rem;
  }
`;

const ConfirmTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const ConfirmDesc = styled.p`
  margin-bottom: 1rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const ConfirmBtn = styled(StyledBtn)`
  margin-left: 0.4rem;

  color: #fff;
  background-color: ${({ theme }) => theme.colors.important};
  border-color: ${({ theme }) => theme.colors.important};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    background-color: #fff;
    transition: all 0.4s ease-in-out;
  }
`;
