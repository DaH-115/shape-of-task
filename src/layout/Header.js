import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import { StyledButton } from '../components/StyledButton';

const HeaderBox = styled.header`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  box-sizing: border-box;
  padding: 15px 10px 15px 10px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .goToTodo {
    margin-right: 6px;
  }
`;

const Header = ({ windowWidth, viewSize }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <HeaderBox>
      <Logo />
      <div>
        {windowWidth >= viewSize || (
          <Link to='/' className='goToTodo'>
            <StyledButton>할 일 보기</StyledButton>
          </Link>
        )}
        {pathname === '/figure-list' || windowWidth >= viewSize ? undefined : (
          <Link to='/figure-list'>
            <StyledButton>도형 보기</StyledButton>
          </Link>
        )}
      </div>
    </HeaderBox>
  );
};

export default Header;
