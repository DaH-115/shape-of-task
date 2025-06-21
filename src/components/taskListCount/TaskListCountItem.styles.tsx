import styled from 'styled-components';
import { ShapeName } from 'types/task';

export const ShapesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
`;

export const TaskItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.device.md} {
    margin-bottom: 0.6rem;

    &:not(:last-child) {
      margin-bottom: 0.6rem;
    }
  }
`;

export const PriorityText = styled.p`
  font-size: 0.85rem;
  font-weight: 700;
  margin-right: auto;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.commonColors.black};

  ${({ theme }) => theme.device.md} {
    font-size: 0.9rem;
  }
`;

export const CountNumber = styled.div<{ $shape: ShapeName }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.8rem;
  height: 1.8rem;

  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme, $shape }) => {
    switch ($shape) {
      case 'triangle':
        return theme.colors.important;
      case 'square':
        return theme.colors.remember;
      case 'circle':
        return theme.colors.anytime;
      default:
        return theme.colors.important;
    }
  }};

  transition: all 0.2s ease-in-out;

  ${({ theme }) => theme.device.md} {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }
`;
