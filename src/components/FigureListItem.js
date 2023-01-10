import React from 'react';
import styled from 'styled-components';
import StyledFigure from './StyledFigure';

const FigureListItem = ({ figure, done }) => {
  return (
    <FigureListLi>{done && <StyledFigure figure={figure} />}</FigureListLi>
  );
};

export default React.memo(FigureListItem);

const FigureListLi = styled.li`
  padding: 8px;

  ${({ theme }) => theme.device.desktop} {
    &:hover {
      transition: background-color 0.3s ease-in-out;
      transform: translateY(-10px);
      transition: transform 0.2s ease-in-out;
    }
  }
`;
