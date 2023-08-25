import styled from 'styled-components';

const StyledBtn = styled.button`
  color: ${({ theme }) => theme.commonColors.black};
  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.commonColors.gray};

  border-radius: 1.2rem;
  padding: 0.5rem 1rem;

  font-size: 0.9rem;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.triangle};
    border-color: ${({ theme }) => theme.colors.triangle};
    transition: color 0.1s ease-in-out;
  }

  &:active {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.triangle};
    transition: background-color 0.2s ease-in-out;
    border: 0.1rem solid ${({ theme }) => theme.colors.triangle};
  }

  &:disabled {
    color: ${({ theme }) => theme.commonColors.gray};
    pointer-events: none;
  }
`;

export default StyledBtn;
