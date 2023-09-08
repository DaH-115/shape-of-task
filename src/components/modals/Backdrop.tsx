import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { modalIsClose } from 'store/modalSlice';
import { styled } from 'styled-components';
import { fadeIn, fadeOut } from 'styles/animation-setting';

interface BackdropProps {
  isopen: boolean;
}

const Backdrop = ({ isopen }: BackdropProps) => {
  const dispatch = useDispatch();

  const onModalCloseHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return <BackdropComponent $isopen={isopen} onClick={onModalCloseHandler} />;
};

export default Backdrop;

const BackdropComponent = styled.div<{ $isopen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(177, 177, 177, 0.5);

  visibility: ${({ $isopen }) => ($isopen ? 'visible' : 'hidden')};
  animation: ${({ $isopen }) => ($isopen ? fadeIn : fadeOut)} 0.4s ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;
