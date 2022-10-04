import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useEffect } from 'react';

const Backdrop = styled.div`
  ${(props) => {
    return css`
      visibility: ${props.modalToggle ? 'visible' : 'hidden'};
      animation: ${props.modalToggle ? fadeIn : fadeOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;
    `;
  }}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(177, 177, 177, 0.8);
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
  ${(props) => {
    return css`
      visibility: ${props.modalToggle ? 'visible' : 'hidden'};
      animation: ${props.modalToggle ? fadeIn : fadeOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;

      ${props.theme.device.desktop} {
        width: 30%;
        height: 80vh;
      } ;
    `;
  }}

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

const TEST_MODAL = ({ children, visible, onClose }) => {
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

export default TEST_MODAL;
