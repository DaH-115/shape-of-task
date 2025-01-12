import styled from 'styled-components';
import SettingBtn from 'components/Button/SettingBtn';
import TodaysQuote from 'components/TodaysQuote/TodaysQuote';
import TaskListCount from 'components/TaskListCount/TaskListCount';
import AddBtn from 'components/Button/AddBtn';
import { useBreakpoint } from 'hooks/useBreakpoint';

const MainPage = () => {
  const isDesktop = useBreakpoint(768);

  return (
    <Container>
      <Wrapper>
        <TodaysQuote />
        {!isDesktop && <AddBtn />}
        <TaskListCount />
        <SettingBtn />
      </Wrapper>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 1rem;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  padding-bottom: 1rem;

  border: none;
  box-shadow: none;

  ${({ theme }) => theme.device.tablet} {
    border: 0.1rem solid ${({ theme }) => theme.commonColors.gray};
    box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  }
`;
