import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { notificationCloseHandler } from 'store/modalSlice';
import { fadeSlideIn, fadeSlideOut } from 'styles/animation-setting';
import PortalComponents from 'components/modals/PortalComponents';
import { MdArrowForwardIos } from 'react-icons/md';

const Notification = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.notification.isOpen);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      timeout = setTimeout(() => dispatch(notificationCloseHandler()), 2000);
    }

    return () => clearTimeout(timeout);
  }, [dispatch, isOpen]);

  const onNavgateHandler = useCallback(() => {
    navigate('/shape-list');
  }, [navigate]);

  return (
    <PortalComponents>
      <NoteWrapper $isOpen={isOpen}>
        <MessageWrapper>
          <NoteTitle>알림</NoteTitle>
          <NoteDesc>할 일 끝! 도형이 추가되었습니다</NoteDesc>
          <IconWrapper onClick={onNavgateHandler}>
            <MdArrowForwardIos aria-hidden />
          </IconWrapper>
        </MessageWrapper>
      </NoteWrapper>
    </PortalComponents>
  );
};

export default Notification;

const NoteWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  padding: 1rem;
  z-index: 100; /* 헤더(z-index: 50)보다 높게 설정 */

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  animation: ${({ $isOpen }) => ($isOpen ? fadeSlideIn : fadeSlideOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;

  cursor: pointer;

  ${({ theme }) => theme.device.md} {
    max-width: ${({ theme }) => theme.size.mobile};
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  font-size: 0.9rem;
  text-align: center;
  padding: 1rem 0.5rem;

  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 1.5rem;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const NoteDesc = styled.p`
  flex: 1;
`;

const NoteTitle = styled.h1`
  color: ${({ theme }) => theme.colors.important};
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.5rem;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.important};
  margin-right: 0.5rem;

  ${({ theme }) => theme.device.md} {
    display: none;
  }
`;
