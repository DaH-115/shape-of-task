import styled from 'styled-components';
import { StyledCircle, StyledSquare, StyledTriangle } from './FigureStyles';

const LogoFigures = ({ figure }) => {
  return (
    <LogoWrapper>
      <StyledCircle figurecolor={figure} />
      <StyledSquare figurecolor={figure} />
      <StyledTriangle figurecolor={figure} />
    </LogoWrapper>
  );
};

export default LogoFigures;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-right: 6px;
`;
