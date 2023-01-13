import styled from 'styled-components';

const StyledBtn = styled.button`
  width: auto;
  min-width: 85px;
  height: 100%;

  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 24px;
  padding: 10px 20px;
  margin: 0 2px;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.triangle};
    border-color: ${({ theme }) => theme.colors.triangle};
    transition: color 0.1s ease-in-out;
  }

  &:active {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.triangle};
    transition: background-color 0.2s ease-in-out;
  }

  &:disabled {
    pointer-events: none;
  }
`;

export default StyledBtn;
