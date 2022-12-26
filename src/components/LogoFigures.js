import styled from 'styled-components';
import StyledCircle from '../assets/Circle';
import StyledSquare from '../assets/Square';
import StyledTriangle from '../assets/Triangle';

const LogoFigures = ({ figurecolor }) => {
  return (
    <LogoWrapper>
      <StyledTriangle figurecolor={figurecolor} />
      <StyledSquare figurecolor={figurecolor} />
      <StyledCircle figurecolor={figurecolor} />
    </LogoWrapper>
  );
};

export default LogoFigures;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-right: 6px;
`;
