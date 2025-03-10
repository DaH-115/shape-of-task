import { useAppDispatch } from 'store/hooks';
import { InputModalOpen } from 'store/modalSlice';
import styled from 'styled-components';
import Btn from 'components/Button/Btn';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useCallback } from 'react';

const AddBtn = () => {
  const dispatch = useAppDispatch();

  const modalOpenHandler = useCallback(() => {
    dispatch(InputModalOpen());
  }, [dispatch]);

  return (
    <AddBtnContainer onClick={modalOpenHandler}>
      <Btn type={'button'} text={'일정 추가'}>
        <StyledAddIcon aria-hidden />
      </Btn>
    </AddBtnContainer>
  );
};

export default AddBtn;

const AddBtnContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledAddIcon = styled(IoIosAddCircleOutline)`
  color: #fff;
  font-size: 1.2rem;
  margin-left: 0.3rem;
`;
