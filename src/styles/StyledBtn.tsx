import styled from 'styled-components';

const StyledBtn = styled.button`
  width: 100%;

  color: ${({ theme }) => theme.commonColors.black};
  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 1rem;

  padding: 0.4rem 0.8rem;

  font-size: 0.9rem;
  font-weight: 700;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    border-color: ${({ theme }) => theme.colors.important};
    transition: all 0.2s ease-in-out;
  }

  &:disabled {
    color: ${({ theme }) => theme.commonColors.gray};
    pointer-events: none;
  }
`;

export default StyledBtn;
