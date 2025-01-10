import { BsPencil, BsTrash } from 'react-icons/bs';
import styled from 'styled-components';
import { css } from 'styled-components';

export const TaskList = styled.ul`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const TaskItem = styled.li`
  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 1rem;
  padding: 0.8rem;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DoneButton = styled.button<{ $isChecked: boolean }>`
  font-size: 1.5rem;
  color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.important : theme.commonColors.gray};
`;

export const ContentText = styled.p<{ $isDone: boolean }>`
  width: 100%;
  padding: 0.5rem 0 1rem 0;

  font-size: 0.9rem;
  color: ${({ theme, $isDone }) =>
    $isDone ? theme.commonColors.gray : theme.commonColors.black};
  text-decoration: ${({ $isDone }) => ($isDone ? 'line-through' : 'none')};
  word-break: keep-all;
  white-space: pre-line;
`;

export const ContentBottom = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.8rem;
  padding: 0.4rem 0 0.6rem 0;
  border-top: 0.2rem dotted ${({ theme }) => theme.commonColors.light_gray};
`;

export const TaskDate = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
  margin-right: 0.3rem;
`;

export const ShapeDesc = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
`;

export const BtnWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.device.tablet} {
    width: 100%;

    div:first-child {
      margin-right: 0.3rem;
    }
  }
`;

const IconStyles = css`
  font-size: 1rem;
  color: #fff;

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.8rem;
  }
`;

export const UpdateIcon = styled(BsPencil)`
  ${IconStyles}
`;

export const RemoveIcon = styled(BsTrash)`
  ${IconStyles}
`;
