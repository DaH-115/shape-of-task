import React from 'react';
import styled from 'styled-components';
import StyledFigures from './StyledFigures';

const FigureListItem = ({
  figure,
  done,
}: {
  figure: string;
  done: boolean;
}) => {
  return (
    <>
      {done && (
        <FigureListLi>
          <StyledFigures figurecolor={figure} />
        </FigureListLi>
      )}
    </>
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
