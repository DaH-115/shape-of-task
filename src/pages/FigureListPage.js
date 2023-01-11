import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { captureIsClose } from '../store/modalSlice';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import useArrCheck from '../hooks/useArrCheck';

import Modal from '../layout/Modal';
import FigureListItem from '../components/FigureListItem';
import PortalModal from '../components/PortalModal';
import StyledBtn from '../styles/StyledBtn';
import MessageBox from '../layout/MessageBox';

const FigureListPage = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [img, setImg] = useState();
  const todoList = useSelector((state) => state.todoList.value);
  const captureModal = useSelector((state) => state.modal.captureState);
  const arrCheck = useArrCheck();

  useEffect(() => {
    const figureList = ref.current;
    const getListImg = async () => {
      const figureListImg = await html2canvas(figureList);
      setImg(figureListImg.toDataURL('image/jpg'));
    };

    if (!img) {
      getListImg();
    }
  }, [img]);

  const modalCloseHandler = useCallback(() => {
    dispatch(captureIsClose(false));
  }, [dispatch]);

  return (
    <>
      {img && (
        <PortalModal>
          <Modal isOpen={captureModal} onClose={modalCloseHandler}>
            <ImgModal>
              <h1>이미지로 보기</h1>
              <p>오늘도 다채로운 하루를 보내셨네요!🥳</p>
              <ImageBox>
                <img src={img} alt='square, triangle, circle Figure List' />
              </ImageBox>
              <CloseBtn onClick={modalCloseHandler}>닫기</CloseBtn>
            </ImgModal>
          </Modal>
        </PortalModal>
      )}
      <UlWrapper ref={ref}>
        {arrCheck === undefined ? (
          <MessageBox messgae='가끔은 여백도 괜찮아요.😌' />
        ) : (
          todoList.map((todoItem) => (
            <FigureListItem
              key={todoItem.id}
              figure={todoItem.figure}
              done={todoItem.done}
            />
          ))
        )}
      </UlWrapper>
    </>
  );
};

export default FigureListPage;

const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
`;

const ImgModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;

  &::after {
    content: ' ';
    display: block;
    clear: both;
  }

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray};
    margin-top: 6px;

    &::after {
      content: ' ';
      display: block;
      margin-top: 10px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.light_gray};
    }
  }
`;

const CloseBtn = styled(StyledBtn)`
  float: right;
`;

const ImageBox = styled.div`
  width: 100%;
  margin-top: 12px;

  img {
    width: 100%;
  }
`;
