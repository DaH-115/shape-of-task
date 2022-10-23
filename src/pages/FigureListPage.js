import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isClose } from '../store/captureSlice';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

import FigureListItem from '../components/FigureListItem';
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
    color: ${({ theme }) => theme.colors.grey};
    margin-top: 6px;

    &::after {
      content: ' ';
      display: block;
      margin-top: 10px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.light_grey};
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
  const capture = useSelector((state) => state.capture.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const figureList = ref.current;
    if (capture) {
      html2canvas(figureList).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/jpg');
        setImg(imageUrl);
      });
    }
  }, [capture]);

  const handleModalClose = useCallback(() => {
    dispatch(isClose(false));
  }, [dispatch]);

  return (
    <>
      {img && (
        <Modal isOpen={capture} onClose={handleModalClose}>
          <ImgModal>
            <h1>이미지로 보기</h1>
            <p>오늘도 다채로운 하루를 보내셨네요!🥳</p>
            <Div>
              <img src={img} alt='square, triangle, circle Figure List' />
            </Div>
            <Button onClick={handleModalClose}>닫기</Button>
          </ImgModal>
        </Modal>
      )}
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
