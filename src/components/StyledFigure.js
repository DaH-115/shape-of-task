import { StyledCircle, StyledSquare, StyledTriangle } from './FigureStyles';

const StyledFigure = ({ size, figure }) => {
  return (
    <>
      {figure === 'circle' && <StyledCircle figurecolor={figure} size={size} />}
      {figure === 'square' && <StyledSquare figurecolor={figure} size={size} />}
      {figure === 'triangle' && (
        <StyledTriangle figurecolor={figure} size={size} />
      )}
    </>
  );
};

export default StyledFigure;
