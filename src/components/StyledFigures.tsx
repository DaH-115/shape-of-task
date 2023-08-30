import React from 'react';
import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/FigureStyles';
import { styled } from 'styled-components';

interface FigureProps {
  figurecolor: string;
  size?: string;
}

const StyledFigures = ({ figurecolor, size }: FigureProps) => {
  return (
    <FigureStyleWrapper>
      {figurecolor === 'circle' && (
        <StyledCircle figurecolor={figurecolor} size={size} />
      )}
      {figurecolor === 'square' && (
        <StyledSquare figurecolor={figurecolor} size={size} />
      )}
      {figurecolor === 'triangle' && (
        <StyledTriangle figurecolor={figurecolor} size={size} />
      )}
    </FigureStyleWrapper>
  );
};

export default StyledFigures;

const FigureStyleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`;
