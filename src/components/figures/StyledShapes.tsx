import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/figures/ShapeStyles';
import { styled } from 'styled-components';

interface StyledShapesProps {
  shapeName: 'circle' | 'square' | 'triangle';
}

const StyledShapes = ({ shapeName }: StyledShapesProps) => {
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
  width: 1.8rem;
  height: 1.8rem;
`;
