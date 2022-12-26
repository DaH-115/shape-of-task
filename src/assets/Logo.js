import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/Logo.svg';

const StyledLogo = () => {
  return <StyledFigure />;
};

export default StyledLogo;

const StyledFigure = styled(Logo)`
  width: auto;
  height: 30px;
`;
