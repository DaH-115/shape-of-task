import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/figures/FigureStyles';
import { styled } from 'styled-components';

const StyledFigures = ({ figurecolor }: { figurecolor: string }) => {
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
