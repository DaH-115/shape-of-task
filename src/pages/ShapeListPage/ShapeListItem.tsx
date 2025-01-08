import React, { memo } from 'react';
import styled from 'styled-components';
import StyledShapes from 'components/figures/StyledShapes';

const ShapeListItem = ({ shape }: { shape: string }) => {
  return (
    <>
      <ShapeItem>
        <StyledShapes shapeName={shape} />
      </ShapeItem>
    </>
  );
};

export default memo(ShapeListItem);

const ShapeItem = styled.li`
  padding: 0.4rem;
`;
