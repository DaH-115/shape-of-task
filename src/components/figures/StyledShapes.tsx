import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/figures/ShapeStyles';
import { styled } from 'styled-components';

const StyledShapes = ({ shapeName }: { shapeName: string }) => {
  return (
    <ShapeStylesWrapper>
      {shapeName === 'circle' && <StyledCircle $shapeName={shapeName} />}
      {shapeName === 'square' && <StyledSquare $shapeName={shapeName} />}
      {shapeName === 'triangle' && <StyledTriangle $shapeName={shapeName} />}
    </ShapeStylesWrapper>
  );
};

export default StyledShapes;

const ShapeStylesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`;
