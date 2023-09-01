import React from 'react';
import styled from 'styled-components';
import { fadeSlideIn, fadeSlideOut } from 'styles/animation-setting';
import PortalModal from 'components/PortalModal';

interface NotificationProps {
  toggle: boolean;
  figure: string;
}

const Notification = ({ toggle, figure }: NotificationProps) => {
  const message =
    figure === 'circle'
      ? '동그라미가 추가되었습니다'
      : figure === 'triangle'
      ? '세모가 추가되었습니다'
      : figure === 'square'
      ? '네모가 추가되었습니다'
      : '도형이 추가되었습니다';

  return (
    <PortalModal>
      <NoteWrapper $toggle={toggle}>
        <MessageWrapper>
          <NoteName>{'알림'}</NoteName>
          <NoteText>{`할 일 끝! ${message}`}</NoteText>
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
