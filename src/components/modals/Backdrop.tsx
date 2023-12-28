import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { modalIsClose } from 'store/modalSlice';
import { styled } from 'styled-components';
import { fadeIn, fadeOut } from 'styles/animation-setting';

interface BackdropProps {
  isOpen: boolean;
}

const Backdrop = ({ isOpen }: BackdropProps) => {
  const dispatch = useDispatch();

  const onModalCloseHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return <BackdropComponent $isOpen={isOpen} onClick={onModalCloseHandler} />;
};

export default Backdrop;

const BackdropComponent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100dvh;
  background-color: rgba(177, 177, 177, 0.5);

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  transition: visibility 0.3s ease-in-out;
`;
