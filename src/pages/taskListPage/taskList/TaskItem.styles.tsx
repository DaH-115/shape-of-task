import { BsPencil, BsTrash } from "react-icons/bs";
import styled from "styled-components";
import { css } from "styled-components";

export const TaskItem = styled.li<{ $isDone?: boolean; $priority?: number }>`
  background-color: ${({ $isDone }) => ($isDone ? "#f8f9fa" : "#fff")};
  border: 1px solid ${({ theme }) => theme.commonColors.gray_border};
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.02);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  position: relative;

  padding: 1rem;
  padding-bottom: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 4px 16px rgba(0, 0, 0, 0.08),
      0 2px 8px rgba(0, 0, 0, 0.04);
    border-color: ${({ theme, $priority, $isDone }) => {
      if ($isDone) return "rgba(0, 0, 0, 0.08)";

      switch ($priority) {
        case 1:
          return theme.colors.priority1;
        case 2:
          return theme.colors.priority2;
        case 3:
          return theme.colors.priority3;
        default:
          return "rgba(0, 0, 0, 0.08)";
      }
    }};
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
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DoneButton = styled.button<{
  $isChecked: boolean;
  $priority: number;
}>`
  font-size: 1.5rem;
  color: ${({ theme, $isChecked, $priority }) => {
    if (!$isChecked) return "#cbd5e1";

    switch ($priority) {
      case 1:
        return theme.colors.priority1;
      case 2:
        return theme.colors.priority2;
      case 3:
        return theme.colors.priority3;
      default:
        return theme.colors.priority1;
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
        ? theme.colors.priority1
        : $priority === 2
          ? theme.colors.priority2
          : $priority === 3
            ? theme.colors.priority3
            : theme.colors.priority1
    }30);
    transform: scale(1.05);
  `}
`;

export const ContentText = styled.p<{ $isDone: boolean }>`
  width: 100%;
  padding: 0;
  margin-bottom: 1rem;
  color: ${({ theme, $isDone }) =>
    $isDone ? theme.commonColors.gray : theme.commonColors.black};
  text-decoration: ${({ $isDone }) => ($isDone ? "line-through" : "none")};
  word-break: keep-all;
  white-space: pre-line;
  transition: all 0.2s ease-in-out;
`;

export const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.commonColors.gray_border};
`;

export const TaskDate = styled.p`
  color: ${({ theme }) => theme.commonColors.medium_gray};
  font-weight: 500;
  background: rgba(0, 0, 0, 0.03);
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.8rem;
`;

export const ShapeDesc = styled.p`
  color: ${({ theme }) => theme.commonColors.medium_gray};
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const ActionDropdownWrapper = styled.div`
  display: flex;
`;

export const ActionDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ActionDropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  color: ${({ theme }) => theme.commonColors.gray};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.priority1};
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const ActionDropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0;

  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.commonColors.gray_border};
  border-radius: 1rem;
  padding: 0.5rem;
  min-width: 8rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-0.4rem")});
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;

export const ActionMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.commonColors.black};
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }

  svg {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.commonColors.gray};
  }
`;

const IconStyles = css`
  font-size: 0.9rem;

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
