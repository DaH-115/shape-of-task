import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TodaysQuote, TaskListCount } from "@/components";
import AddButton from "@/components/buttons/AddButton";
import { useBreakpoint } from "@/hooks";

const MainPage = () => {
  const navigate = useNavigate();
  const { isAboveBreakpoint: isDesktop } = useBreakpoint({ breakpoint: 768 });
  const navigateHandler = useCallback(
    () => (isDesktop ? () => navigate("/task-list") : () => null),
    [isDesktop, navigate],
  );

  return (
    <Container>
      {/* 명언 섹션 */}
      <QuoteSection>
        <TodaysQuote />
      </QuoteSection>

      {/* 일정 통계 섹션 */}
      <StatsSection>
        <TaskListCount />
      </StatsSection>

      <AddButtonWrapper>
        <AddButton onAddClick={navigateHandler} />
      </AddButtonWrapper>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  flex: 1;
  min-height: 0;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.device.md} {
    min-width: 0;
  }
`;

const QuoteSection = styled.div`
  background-color: ${({ theme }) => theme.commonColors.surface};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.elevated};
  padding: 2rem;
  flex: 1;
  min-height: 0; /* flex overflow 허용 */
  overflow-y: auto; /* 명언이 길어지면 내부 스크롤 */

  ${({ theme }) => theme.device.md} {
    padding: 1.5rem;
  }
`;

const StatsSection = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.commonColors.surface};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.elevated};
  padding: 2rem;
`;

const AddButtonWrapper = styled.div`
  padding: 1rem 0;

  ${({ theme }) => theme.device.md} {
    display: none;
  }
`;
