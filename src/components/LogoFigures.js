import styled from 'styled-components';
import { StyledCircle, StyledSquare, StyledTriangle } from './FigureStyles';

const LogoFigures = ({ figure }) => {
  return (
    <LogoWrapper>
      <StyledCircle figureColor={figure} />
      <StyledSquare figureColor={figure} />
      <StyledTriangle figureColor={figure} />
    </LogoWrapper>
  );
};

export default LogoFigures;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-right: 6px;
`;
