import { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Backdrop = styled.div`
  ${({ modalToggle }) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(177, 177, 177, 0.8);

      visibility: ${modalToggle ? 'visible' : 'hidden'};
      animation: ${modalToggle ? fadeIn : fadeOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;
    `;
  }}
`;

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalWapper = styled.div`
  ${({ theme, modalToggle }) => {
    return css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      width: 100%;

      visibility: ${modalToggle ? 'visible' : 'hidden'};
      animation: ${modalToggle ? fadeIn : fadeOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;

      ${theme.device.desktop} {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
      }
    `;
  }}
`;

const Modal = ({ children, visible, onClose }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timeout;

    if (!visible) {
      timeout = setTimeout(() => {
        setAnimate(true);
      }, 400);
    }

    setAnimate(false);

    return () => clearTimeout(timeout);
  }, [visible]);

  if (animate && !visible) return null;

  return (
    <>
      <Backdrop modalToggle={visible} onClick={onClose} />
      <ModalWapper modalToggle={visible}>{children}</ModalWapper>
    </>
  );
};

export default Modal;
