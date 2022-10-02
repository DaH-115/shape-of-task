import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

import FigureListItem from './FigureListItem';

const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FigureList = ({ todoList, onCapture }) => {
  const ref = useRef();
  const [img, setImg] = useState();

  useEffect(() => {
    if (onCapture) {
      const figureList = ref.current;
      figureList.style.width = '400px';
      figureList.style.hight = '700px';
      figureList.style.paddingBottom = '30px';

      html2canvas(figureList).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/jpg');
        setImg(imageUrl);
      });
    }
  }, [onCapture]);

  return (
    <>
      {img && <img src={img} alt='img' />}
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
