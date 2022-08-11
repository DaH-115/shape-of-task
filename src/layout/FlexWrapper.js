import styled, { css } from 'styled-components';

const FlexDiv = styled.div`
  display: flex;

  ${({ theme }) => {
    return css`
      ${theme.device.modile} {
        min-width: 425px;
      }
    `;
  }}
`;

const FlexWrapper = ({ children }) => {
  return <FlexDiv>{children}</FlexDiv>;
};

export default FlexWrapper;
