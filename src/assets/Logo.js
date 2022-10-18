import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const StyledFigure = styled(Logo)`
  width: auto;
  height: 40px;
`;

const StyledLogo = () => {
  return <StyledFigure />;
};

export default StyledLogo;
