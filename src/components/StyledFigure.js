import { StyledCircle, StyledSquare, StyledTriangle } from './FigureStyles';

const StyledFigure = ({ size, figure }) => {
  return (
    <>
      {figure === 'circle' && <StyledCircle figureColor={figure} size={size} />}
      {figure === 'square' && <StyledSquare figureColor={figure} size={size} />}
      {figure === 'triangle' && (
        <StyledTriangle figureColor={figure} size={size} />
      )}
    </>
  );
};

export default StyledFigure;
