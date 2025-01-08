import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  padding: 1rem;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const TaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1rem;

  ${({ theme }) => theme.device.tablet} {
    padding: 0;
  }
`;

export const SortButton = styled.button`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover,
  :active {
    color: ${({ theme }) => theme.colors.important};
    transition: color 0.2s ease-in-out;
  }
`;

export const MessagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BlankMessage = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
  font-size: 1.2rem;
  margin-top: 2rem;
`;
