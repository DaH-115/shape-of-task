import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import { modalIsOpen } from 'store/modalSlice';

const AddBtn = () => {
  const dispatch = useAppDispatch();

  const onModalOpenHandler = useCallback(() => {
    dispatch(modalIsOpen());
  }, [dispatch]);

  return (
    <AddBtnWrapper>
      <TodoAddBtn onClick={onModalOpenHandler}>{'할 일 추가 +'}</TodoAddBtn>
    </AddBtnWrapper>
  );
};

export default React.memo(AddBtn);

const AddBtnWrapper = styled.div`
  margin-left: 0.6rem;
`;

const TodoAddBtn = styled.button`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 1.2rem;

  color: #fff;
  background-color: ${({ theme }) => theme.colors.remember};
  border: 0.1rem solid ${({ theme }) => theme.colors.remember};
  border-radius: 2.2rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.3);

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    background-color: #fff;
    transition: all 0.4s ease-in-out;
  }

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.9rem;
  }
`;
