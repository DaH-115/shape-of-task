import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isClose } from '../store/captureSlice';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

import FigureListItem from '../components/FigureListItem';
import Modal from '../components/Modal';

const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgContainer = styled.img`
  width: 100%;
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
          <ImgContainer src={img} alt='Figure List Image' />
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
