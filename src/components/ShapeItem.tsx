import React from 'react';
import styled from 'styled-components';
import StyledShapes from 'components/figures/StyledShapes';

interface ShapeItemProps {
  shape: string;
  isDone: boolean;
}

const ShapeItem = ({ shape, isDone }: ShapeItemProps) => {
  return (
    <>
      {isDone && (
        <ShapeItems>
          <StyledShapes shapeName={shape} />
        </ShapeItems>
      )}
    </>
  );
};

export default React.memo(ShapeItem);

const ShapeItems = styled.li`
  padding: 0.4rem;
`;
