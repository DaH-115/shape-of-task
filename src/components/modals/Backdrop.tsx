import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { fadeIn, fadeOut } from 'styles/animation-setting';

interface BackdropProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Backdrop = ({ isOpen, onClose }: BackdropProps) => {
  const onModalCloseHandler = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return <BackdropComponent $isOpen={isOpen} onClick={onModalCloseHandler} />;
};

export default memo(Backdrop);

const BackdropComponent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* 헤더(50)보다 높고, 모달(1001)보다 낮게 설정 */

  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5); /* 더 자연스러운 검은색 배경 */

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  transition: visibility 0.3s ease-in-out;
`;
