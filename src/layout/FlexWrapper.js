import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
`;
