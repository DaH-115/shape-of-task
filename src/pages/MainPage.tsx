import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TodaysQuote, TaskListCount, Btn } from '@/components';
import { StyledAddIcon } from '@/components/buttons/AddBtn';
import { useBreakpoint } from '@/hooks';

const MainPage = () => {
  const { isAboveBreakpoint: isDesktop } = useBreakpoint({ breakpoint: 768 });
  const navigate = useNavigate();

  const navigateHandler = useCallback(() => {
    navigate('/task-list');
  }, [navigate]);

  return (
    <Container>
      {/* 일정 통계 섹션 */}
      <StatsSection>
        <TaskListCount />
      </StatsSection>
      {/* 명언 섹션 */}
      <QuoteSection>
        <TodaysQuote />
      </QuoteSection>
      {/* 일정 추가 버튼 */}
      <ButtonSection $isVisible={!isDesktop}>
        <Btn type={'button'} text={'Add Task'} onClick={navigateHandler}>
          <StyledAddIcon aria-hidden />
        </Btn>
      </ButtonSection>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QuoteSection = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  padding: 1rem;
  flex: 1;

  ${({ theme }) => theme.device.md} {
    padding: 1.5rem;
  }
`;

const StatsSection = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  padding: 1rem;

  ${({ theme }) => theme.device.md} {
    padding: 1.5rem;
  }
`;

const ButtonSection = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  flex-shrink: 0;
`;
