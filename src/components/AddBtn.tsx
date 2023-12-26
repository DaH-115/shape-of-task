import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { modalIsOpen } from 'store/modalSlice';
import styled from 'styled-components';
import { Btn } from 'styles/Button/Btn';

const AddBtn = () => {
  const dispatch = useAppDispatch();

  const modalOpenHandler = React.useCallback(() => {
    dispatch(modalIsOpen());
  }, [dispatch]);

  return (
    <AddBtnContainer onClick={modalOpenHandler}>
      <Btn text='일정 추가 +' />
    </AddBtnContainer>
  );
};

export default React.memo(AddBtn);

const AddBtnContainer = styled.div`
  width: 100%;
`;
