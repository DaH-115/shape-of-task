import React from 'react';
import styled from 'styled-components';
import { IoMdSettings } from 'react-icons/io';
import SettingMenu from 'components/menus/SettingMenu';

export const BtnSetting = () => {
  const [isToggle, setIsToggle] = React.useState(false);

  const menuToggleHandler = React.useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  return (
    <>
      <ButtonWrapper onClick={menuToggleHandler}>
        <IoMdSettings fontSize='1.2rem' />
        <button type='button'>{'설정'}</button>
      </ButtonWrapper>
      <SettingMenu isOpen={isToggle} slideMenuHandler={menuToggleHandler} />
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 0.1rem solid #fff;
  border-radius: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;

  button {
    color: ${({ theme }) => theme.commonColors.black};
    font-size: 1.2rem;
  }

  &:hover,
  :active {
    border-color: ${({ theme }) => theme.colors.important};
    transition: all 0.2s ease-in-out;
  }

  svg {
    color: ${({ theme }) => theme.colors.anytime};
    margin-right: 0.3rem;
  }
`;
