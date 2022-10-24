import styled, { css, keyframes } from 'styled-components';
import PortalModal from '../components/PortalModal';

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

const NoteMessage = styled.div`
  ${(props) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      box-sizing: border-box;
      padding: 25px;
      text-align: center;
      box-shadow: 0px 0px 20px rgba(223, 74, 11, 0.5);
      visibility: ${props.toggle ? 'visible' : 'hidden'};
      animation: ${props.toggle ? fadeSlideIn : fadeSlideOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    `;
  }}
`;

const Notification = ({ toggle, figure }) => {
  return (
    <PortalModal>
      <NoteMessage toggle={toggle}>
        {`도형 메뉴에 ${
          figure === 'circle'
            ? '동그라미'
            : figure === 'triangle'
            ? '세모'
            : figure === 'square'
            ? '네모'
            : '도형이'
        }가 추가되었습니다! 🤗`}
      </NoteMessage>
    </PortalModal>
  );
};

export default Notification;
