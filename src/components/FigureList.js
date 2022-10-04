import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

import FigureListItem from './FigureListItem';
import Modal from './Modal';

const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgContainer = styled.img`
  width: 100%;
`;

const FigureList = ({ todoList, capture, onCapture }) => {
  const ref = useRef();
  const [img, setImg] = useState();

  useEffect(() => {
    const figureList = ref.current;
    if (capture) {
      figureList.style.width = '400px';
      figureList.style.hight = '700px';
      figureList.style.paddingBottom = '30px';

      html2canvas(figureList).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/jpg');
        setImg(imageUrl);
      });
    }

    figureList.style.width = 'auto';
    figureList.style.hight = 'auto';
    figureList.style.paddingBottom = 'auto';
  }, [capture]);

  const handleModalClose = () => {
    onCapture(false);
  };

  return (
    <>
      <Modal visible={capture} onClose={handleModalClose}>
        {img && <ImgContainer src={img} alt='img' />}
      </Modal>
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

export default FigureList;
