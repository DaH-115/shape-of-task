import { useState, useRef, useEffect, useCallback } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const figureList = ref.current;
    if (isOpen) {
      figureList.style.paddingBottom = '30px';

      html2canvas(figureList).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/jpg');
        setImg(imageUrl);
      });
    }

    figureList.style.paddingBottom = 'auto';
  }, [isOpen]);

  const handleModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {img && (
        <Modal isOpen={isOpen} onClose={handleModalClose}>
          <ImgContainer src={img} alt='Figure List Image' />
        </Modal>
      )}
      <UlWrapper ref={ref} onClick={handleModalOpen}>
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
