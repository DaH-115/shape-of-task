import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { IoMdSettings } from 'react-icons/io';
import SettingMenu from 'components/menus/SettingMenu';

const SettingBtn = () => {
  const [isToggle, setIsToggle] = useState(false);

  const menuToggleHandler = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  return (
    <BtnWrapper>
      <ButtonWrapper onClick={menuToggleHandler}>
        <IoMdSettings aria-hidden />
        <button type='button'>설정</button>
      </ButtonWrapper>
      <SettingMenu isOpen={isToggle} sideMenuHandler={menuToggleHandler} />
    </BtnWrapper>
  );
};

export default SettingBtn;

const BtnWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.device.tablet} {
    padding: 0 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border: 0.1rem solid #fff;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  button {
    color: ${({ theme }) => theme.commonColors.black};
    font-size: 1rem;
  }

  &:hover,
  :active {
    border-color: ${({ theme }) => theme.colors.important};
    transition: all 0.1s ease-in-out;
  }

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.commonColors.gray};
    margin-right: 0.3rem;
  }
`;
