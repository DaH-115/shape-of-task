import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useGetwindowWidth from 'hooks/useGetwindowWidth';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import { fadeSlideIn, fadeSlideOut } from 'styles/animation-setting';
import PortalModal from 'components/modals/PortalModal';
import { MdArrowForwardIos } from 'react-icons/md';

const Notification = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isModalState = useAppSelector(
    (state) => state.modal.notificationState.isOpen
  );
  const isDoneState = useAppSelector(
    (state) => state.modal.notificationState.isDone
  );
  const { windowWidth, tabletSize } = useGetwindowWidth();
  const shouldRedirect = windowWidth >= tabletSize;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isModalState) {
      timeout = setTimeout(() => dispatch(modalIsClose()), 1500);
    }

    if (isDoneState) {
      dispatch(modalIsClose());
    }

    return () => clearTimeout(timeout);
  }, [dispatch, isModalState, isDoneState]);

  const onNavgateHandler = useCallback(() => {
    if (!shouldRedirect) {
      navigate('/figure-list');
    }
  }, [navigate, shouldRedirect]);

  return (
    <PortalModal>
      <NoteWrapper onClick={onNavgateHandler} $toggle={isModalState}>
        <MessageWrapper>
          <NoteName>{'알림'}</NoteName>
          <NoteText>{`할 일 끝! 도형이 추가되었습니다`}</NoteText>
          <IconWrapper>
            <MdArrowForwardIos />
          </IconWrapper>
        </MessageWrapper>
      </NoteWrapper>
    </PortalModal>
  );
};

export default React.memo(Notification);

const NoteWrapper = styled.div<{ $toggle: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 1rem;

  visibility: ${({ $toggle }) => ($toggle ? 'visible' : 'hidden')};
  animation: ${({ $toggle }) => ($toggle ? fadeSlideIn : fadeSlideOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;

  cursor: pointer;

  ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.1rem;
  text-align: center;
  padding: 1rem 0.5rem;

  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};

  border-radius: 1.5rem;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const NoteText = styled.p`
  flex: 1;
`;

const NoteName = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.5rem;
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
`;
