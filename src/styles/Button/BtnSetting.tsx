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
    <BtnWrapper>
      <ButtonWrapper onClick={menuToggleHandler}>
        <IoMdSettings fontSize='1.5rem' />
        <button type='button'>{'설정'}</button>
      </ButtonWrapper>
      <SettingMenu isOpen={isToggle} slideMenuHandler={menuToggleHandler} />
    </BtnWrapper>
  );
};

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

  ${({ theme }) => theme.device.tablet} {
    button {
      color: ${({ theme }) => theme.commonColors.black};
      font-size: 1rem;
    }
  }
`;
