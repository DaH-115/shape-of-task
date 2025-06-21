import { BsPencil, BsTrash } from 'react-icons/bs';
import styled from 'styled-components';
import { css } from 'styled-components';

export const TaskList = styled.ul`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const TaskItem = styled.li`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 1.2rem;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.02) 0%,
      rgba(0, 0, 0, 0.04) 50%,
      rgba(0, 0, 0, 0.02) 100%
    );
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.08);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem;
`;

export const DoneButton = styled.button<{
  $isChecked: boolean;
  $priority: number;
}>`
  font-size: 1.6rem;
  color: ${({ theme, $isChecked, $priority }) => {
    if (!$isChecked) return '#cbd5e1';

    // 중요도별 색상 매핑
    switch ($priority) {
      case 1:
        return theme.colors.important; // 중요함 - 빨간색 계열
      case 2:
        return theme.colors.remember; // 기억할 것 - 노란색 계열
      case 3:
        return theme.colors.anytime; // 언제든지 - 파란색 계열
      default:
        return theme.colors.important;
    }
  }};
  transition: all 0.25s ease-in-out;
  padding: 0.25rem;
  border-radius: 50%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, $isChecked, $priority }) =>
    $isChecked &&
    `
    filter: drop-shadow(0 0 6px ${
      $priority === 1
        ? theme.colors.important
        : $priority === 2
        ? theme.colors.remember
        : $priority === 3
        ? theme.colors.anytime
        : theme.colors.important
    }30);
    transform: scale(1.05);
  `}
`;

export const ContentText = styled.p<{ $isDone: boolean }>`
  width: 100%;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme, $isDone }) =>
    $isDone ? theme.commonColors.gray : theme.commonColors.black};
  text-decoration: ${({ $isDone }) => ($isDone ? 'line-through' : 'none')};
  word-break: keep-all;
  white-space: pre-line;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
`;

export const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0.85rem;
  padding: 0.75rem 0 0.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 0.75rem;
`;

export const TaskDate = styled.p`
  color: #64748b;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.03);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
`;

export const ShapeDesc = styled.p`
  color: #64748b;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;

  ${({ theme }) => theme.device.md} {
    width: 100%;
    justify-content: center;
  }
`;

const IconStyles = css`
  font-size: 0.9rem;
  color: #fff;

  ${({ theme }) => theme.device.md} {
    font-size: 0.8rem;
  }
`;

export const UpdateIcon = styled(BsPencil)`
  ${IconStyles}
`;

export const RemoveIcon = styled(BsTrash)`
  ${IconStyles}
`;
