import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const StyledFigure = styled(Logo)`
  width: auto;
  height: 30px;
`;

const StyledLogo = () => {
  return <StyledFigure />;
};

export default StyledLogo;
