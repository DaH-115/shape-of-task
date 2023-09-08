import React from 'react';
import styled from 'styled-components';
import StyledFigures from 'components/figures/StyledFigures';

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
`;
