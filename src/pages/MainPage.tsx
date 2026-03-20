import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TodaysQuote, TaskListCount } from "@/components";
import AddButton from "@/components/buttons/AddButton";
import { useBreakpoint } from "@/hooks";

const MainPage = () => {
  const { isAboveBreakpoint: isDesktop } = useBreakpoint({ breakpoint: 768 });
  const navigate = useNavigate();

  const navigateHandler = useCallback(() => {
    navigate("/task-list");
  }, [navigate]);

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

      {/* 일정 추가 버튼 */}
      <ButtonSection $isVisible={!isDesktop}>
        <AddButton onAddClick={navigateHandler} />
      </ButtonSection>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  flex: 1;
  min-height: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.device.md} {
    min-width: 0;
  }
`;

const QuoteSection = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  padding: 1rem;
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

  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  padding: 1rem;

  ${({ theme }) => theme.device.md} {
    padding: 1.5rem;
  }
`;

const ButtonSection = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  flex-shrink: 0;
`;
