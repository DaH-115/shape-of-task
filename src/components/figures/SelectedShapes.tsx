import React from 'react';
import styled from 'styled-components';
import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/figures/ShapeStyles';

const SelectedShapes = ({ shape }: { shape: string }) => {
  return (
    <ShapeWrapper>
      <StyledTriangle $shapeName={shape} />
      <StyledSquare $shapeName={shape} />
      <StyledCircle $shapeName={shape} />
    </ShapeWrapper>
  );
};

export default React.memo(SelectedShapes);

const ShapeWrapper = styled.div`
  display: flex;
  width: 100%;
`;
