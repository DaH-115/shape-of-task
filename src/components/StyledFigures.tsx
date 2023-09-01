import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/FigureStyles';
import { styled } from 'styled-components';

interface FigureProps {
  figurecolor: string;
}

const StyledFigures = ({ figurecolor }: FigureProps) => {
  return (
    <FigureStyleWrapper>
      {figurecolor === 'circle' && <StyledCircle figurecolor={figurecolor} />}
      {figurecolor === 'square' && <StyledSquare figurecolor={figurecolor} />}
      {figurecolor === 'triangle' && (
        <StyledTriangle figurecolor={figurecolor} />
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
