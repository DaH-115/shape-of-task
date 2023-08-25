import styled from 'styled-components';
import { StyledCircle, StyledSquare, StyledTriangle } from './FigureStyles';

const LogoFigures = ({ figure }: { figure: string }) => {
  return (
    <LogoWrapper>
      <StyledTriangle figurecolor={figure} />
      <StyledSquare figurecolor={figure} />
      <StyledCircle figurecolor={figure} />
    </LogoWrapper>
  );
};

export default LogoFigures;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-right: 6px;
`;
