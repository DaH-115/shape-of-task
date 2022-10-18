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
      top: 5%;
      left: 15%;

      background-color: #fff;
      text-align: center;
      padding: 20px;
      border-radius: 30px;
      box-shadow: 0px 0px 20px rgba(223, 74, 11, 0.5);

      visibility: ${props.toggle ? 'visible' : 'hidden'};
      animation: ${props.toggle ? fadeSlideIn : fadeSlideOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;
    `;
  }}
`;

const Notification = ({ toggle, figure, done }) => {
  if (!done && !toggle) {
    return null;
  }

  return (
    <PortalModal>
      <NoteMessage toggle={toggle}>
        {`${
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
