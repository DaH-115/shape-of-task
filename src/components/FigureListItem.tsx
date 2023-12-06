import React from 'react';
import styled from 'styled-components';
import StyledShapes from 'components/figures/StyledShapes';

interface FigureListItemProps {
  shape: string;
  done: boolean;
}

const FigureListItem = ({ shape, done }: FigureListItemProps) => {
  return (
    <>
      {done && (
        <FigureListLi>
          <StyledShapes shapeName={shape} />
        </FigureListLi>
      )}
    </>
  );
};

export default React.memo(FigureListItem);

const FigureListLi = styled.li`
  padding: 0.4rem;
`;
