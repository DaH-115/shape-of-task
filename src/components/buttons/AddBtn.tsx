import { useAppDispatch } from 'store/hooks';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useCallback } from 'react';
import Btn from './Btn';
import { ButtonContainer } from './styles/common';
import styled from 'styled-components';
import { ICON_STYLES } from './styles/constants';

interface AddBtnProps {
  onAddClick?: () => void;
}

// 일정 추가 버튼 컴포넌트
const AddBtn = ({ onAddClick }: AddBtnProps) => {
  const dispatch = useAppDispatch();

  // 모달 열기 핸들러
  const modalOpenHandler = useCallback(() => {
    if (onAddClick) {
      onAddClick();
    } else {
      // 기본 동작 - TODO: 모달 상태 관리 구현 필요
      console.log('Add button clicked');
    }
  }, [onAddClick]);

  return (
    <ButtonContainer onClick={modalOpenHandler}>
      <Btn type={'button'} text={'일정 추가'} onClick={modalOpenHandler}>
        <StyledAddIcon aria-hidden />
      </Btn>
    </ButtonContainer>
  );
};

export default AddBtn;

// 추가 아이콘 스타일
export const StyledAddIcon = styled(IoIosAddCircleOutline)`
  color: #fff;
  font-size: ${ICON_STYLES.fontSize};
  margin-left: 0.3rem;
`;
