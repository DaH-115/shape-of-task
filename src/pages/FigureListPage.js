import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { captureIsClose } from '../store/modalSlice';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

import FigureListItem from '../components/FigureListItem';
import PortalModal from '../components/PortalModal';
import Modal from '../layout/Modal';
import StyledButton from '../styles/StyledButton';

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
  box-sizing: border-box;

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

const Button = styled(StyledButton)`
  float: right;
`;

const Div = styled.div`
  width: 100%;
  margin-top: 12px;

  img {
    width: 100%;
  }
`;

const FigureListPage = () => {
  const ref = useRef();
  const [img, setImg] = useState();
  const todoList = useSelector((state) => state.todoList.value);
  const captureModal = useSelector((state) => state.modal.captureState);
  const dispatch = useDispatch();

  useEffect(() => {
    const figureList = ref.current;
    if (!img) {
      html2canvas(figureList).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/jpg');
        setImg(imageUrl);
      });
    }
  }, [img]);

  const modalCloseHandler = useCallback(() => {
    dispatch(captureIsClose(false));
  }, [dispatch]);

  return (
    <>
      {img ? (
        <PortalModal>
          <Modal isOpen={captureModal} onClose={modalCloseHandler}>
            <ImgModal>
              <h1>이미지로 보기</h1>
              <p>오늘도 다채로운 하루를 보내셨네요!🥳</p>
              <Div>
                <img src={img} alt='square, triangle, circle Figure List' />
              </Div>
              <Button onClick={modalCloseHandler}>닫기</Button>
            </ImgModal>
          </Modal>
        </PortalModal>
      ) : null}
      <UlWrapper ref={ref}>
        {todoList.map((todoItem) => {
          return (
            <FigureListItem
              key={todoItem.id}
              figure={todoItem.figure}
              done={todoItem.done}
            />
          );
        })}
      </UlWrapper>
    </>
  );
};

export default FigureListPage;
