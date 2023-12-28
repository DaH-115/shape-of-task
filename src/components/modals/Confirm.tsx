import { useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import { removeTask } from 'store/taskListSlice';
import PortalComponents from 'components/modals/PortalComponents';
import Backdrop from 'components/modals/Backdrop';
import { fadeIn, fadeOut } from 'styles/animation-setting';
import { Title } from 'styles/Title';
import { Btn } from 'styles/Button/Btn';

const Confirm = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.confirmState.isOpen);
  const isTodoId = useAppSelector((state) => state.modal.confirmState.isTodoId);

  const confirmHandler = useCallback(() => {
    dispatch(removeTask(isTodoId));
    dispatch(modalIsClose());
  }, [dispatch, isTodoId]);

  const closeHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <PortalComponents>
      <Backdrop isOpen={isOpen} />
      <ConfirmWrapper $isOpen={isOpen}>
        <Title title='확인' desc='정말 지우시겠어요?' />
        <BtnWrapper>
          <RejectBtnWrapper onClick={closeHandler}>
            <Btn type='button' text='취소' isEmpty />
          </RejectBtnWrapper>
          <ConfrimBtnWrapper onClick={confirmHandler}>
            <Btn type='button' text='삭제' />
          </ConfrimBtnWrapper>
        </BtnWrapper>
      </ConfirmWrapper>
    </PortalComponents>
  );
};

export default Confirm;

const ConfirmWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  min-width: ${({ theme }) => theme.size.mobile};

  padding: 0 1rem;
  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);

  ${({ theme }) => theme.device.tablet} {
  }

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.4s ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
`;

const ConfrimBtnWrapper = styled.div`
  width: 100%;
`;

const RejectBtnWrapper = styled.div`
  width: 100%;
  margin-right: 0.6rem;
`;
