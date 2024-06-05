import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { ReactComponent as Logo } from 'assets/Logo.svg';
import NavMenu from 'components/menus/NavMenu';

const Header = () => {
  const [isToggle, setIsToggle] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onMoveToMainHandler = React.useCallback(() => {
    if (pathname !== '/') {
      navigate('/');
    }
  }, [navigate, pathname]);

  const menuToggleHandler = React.useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  return (
    <HeaderWrapper>
      <Wrapper>
        <LogoWrapper onClick={onMoveToMainHandler}>
          <StyledLogo />
        </LogoWrapper>
        <ResponsiveIoMenu fontSize={'2rem'} onClick={menuToggleHandler} />
      </Wrapper>
      <NavMenu isOpen={isToggle} slideMenuHandler={menuToggleHandler} />
    </HeaderWrapper>
  );
};

export default React.memo(Header);

const ResponsiveIoMenu = styled(IoMenu)`
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;

  ${({ theme }) => theme.device.tablet} {
    padding: 0.5rem 1rem;
  }
`;

const LogoWrapper = styled.div`
  width: 4rem;
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
