import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { IoMdSettings } from 'react-icons/io';
import SettingMenu from 'components/menu/Setting/SettingMenu';
import { IconButtonWrapper } from './styles/common';

// 설정 버튼 컴포넌트
const SettingBtn = () => {
  const [isToggle, setIsToggle] = useState(false);

  // 메뉴 토글 핸들러
  const menuToggleHandler = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  return (
    <BtnWrapper>
      <IconButtonWrapper onClick={menuToggleHandler}>
        <IoMdSettings aria-hidden />
        <button type='button'>설정</button>
      </IconButtonWrapper>
      <SettingMenu isOpen={isToggle} sideMenuHandler={menuToggleHandler} />
    </BtnWrapper>
  );
};

export default SettingBtn;

// 설정 버튼 전체 래퍼
const BtnWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.device.tablet} {
    padding: 0 1rem;
  }
`;
