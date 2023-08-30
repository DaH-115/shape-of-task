import React from 'react';
import styled from 'styled-components';
import StyledFigures from 'components/StyledFigures';

interface FigureListItemProps {
  figure: string;
  done: boolean;
}

const FigureListItem = ({ figure, done }: FigureListItemProps) => {
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
  padding: 0.4rem;

  ${({ theme }) => theme.device.desktop} {
    &:hover {
      transition: background-color 0.3s ease-in-out;
      transform: translateY(-0.5rem);
      transition: transform 0.2s ease-in-out;
    }
  }
`;
