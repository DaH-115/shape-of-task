import styled, { keyframes } from 'styled-components';
import PortalModal from '../components/PortalModal';

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
      <NoteMessage toggle={toggle}>{`도형 메뉴에 ${message}`}</NoteMessage>
    </PortalModal>
  );
};

export default Notification;

// Animation Setting
const fadeSlideIn = keyframes`
  from {
    transform: translateY(-40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeSlideOut = keyframes`
  from {
      transform: translateY(0);
      opacity: 1;
  }
  to {
      transform: translateY(-40px);
      opacity: 0;
  }
`;

const NoteMessage = styled.div<{ toggle: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  padding: 25px;
  font-size: 24px;
  text-align: center;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px rgba(223, 74, 11, 0.5);

  visibility: ${({ toggle }) => (toggle ? 'visible' : 'hidden')};
  animation: ${({ toggle }) => (toggle ? fadeSlideIn : fadeSlideOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;
