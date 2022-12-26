import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 24px;
  padding: 10px 20px 10px 20px;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
    border-color: ${({ theme }) => theme.colors.orange};
    transition: color 0.1s ease-in-out;
  }

  &:active {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.orange};
    transition: background-color 0.2s ease-in-out;
  }

  &:disabled {
    pointer-events: none;
  }
`;

export default StyledBtn;
