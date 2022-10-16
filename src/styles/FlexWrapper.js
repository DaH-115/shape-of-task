import styled from 'styled-components';
import Wrapper from './Wrapper';

const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
`;

export default FlexWrapper;
