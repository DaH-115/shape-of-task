import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SettingBtn from 'components/Button/SettingBtn';
import TodaysQuote from 'components/TodaysQuote/TodaysQuote';
import TaskListCount from 'components/TaskListCount/TaskListCount';
import { StyledAddIcon } from 'components/Button/AddBtn';
import { useBreakpoint } from 'hooks/useBreakpoint';
import Btn from 'components/Button/Btn';

const MainPage = () => {
  const isDesktop = useBreakpoint(768);
  const navigate = useNavigate();

  const navigateHandler = useCallback(() => {
    navigate('/task-list');
  }, [navigate]);

  return (
    <Container>
      <Wrapper>
        <TodaysQuote />
        {!isDesktop && (
          <Btn
            type={'button'}
            text={'일정 추가하기'}
            onClickFn={navigateHandler}
          >
            <StyledAddIcon aria-hidden />
          </Btn>
        )}
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

  ${({ theme }) => theme.mixins.hideScrollbar}
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
