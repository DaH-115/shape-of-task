import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isClose } from '../store/captureSlice';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

import FigureListItem from '../components/FigureListItem';
import Modal from '../components/Modal';
import { StyledButton } from '../components/StyledButton';

const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    color: ${({ theme }) => theme.colors.grey};
    margin-top: 6px;

    &::after {
      content: ' ';
      display: block;
      margin-top: 18px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    }
  }

  img {
    width: 100%;
    height: 100%;
    margin-top: 12px;
  }
`;

const Button = styled(StyledButton)`
  width: 20%;
  float: right;
`;

const FigureListPage = ({ todoList }) => {
  const ref = useRef();
  const [img, setImg] = useState();
  const capture = useSelector((state) => state.capture.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const figureList = ref.current;
    if (capture) {
      figureList.style.paddingBottom = '30px';

      html2canvas(figureList).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/jpg');
        setImg(imageUrl);
      });
    }

    figureList.style.paddingBottom = 'auto';
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
            <p>오늘도 다채로운 하루를 보내셨네요!</p>
            <img src={img} alt='square, triangle, circle Figure List' />
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
