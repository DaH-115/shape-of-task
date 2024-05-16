import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { InputModalOpen } from 'store/modalSlice';
import styled from 'styled-components';
import { Btn } from 'styles/Button/Btn';
import { IoIosAddCircleOutline } from 'react-icons/io';

const AddBtn = () => {
  const dispatch = useAppDispatch();

  const modalOpenHandler = React.useCallback(() => {
    dispatch(InputModalOpen());
  }, [dispatch]);

  return (
    <AddBtnContainer onClick={modalOpenHandler}>
      <Btn type='button' text='일정 추가'>
        <StyledAddIcon />
      </Btn>
    </AddBtnContainer>
  );
};

export default React.memo(AddBtn);

const AddBtnContainer = styled.div`
  width: 100%;
`;

const StyledAddIcon = styled(IoIosAddCircleOutline)`
  color: #fff;
  font-size: 1.2rem;
  margin-left: 0.3rem;
`;
