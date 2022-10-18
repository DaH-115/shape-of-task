import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import StyledLogo from '../assets/Logo';
import StyledButton from '../styles/StyledButton';
import { useDispatch } from 'react-redux';
import { isOpen } from '../store/captureSlice';

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  box-sizing: border-box;
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.2);
  background-color: #fff;

  .goToTodo {
    margin-right: 6px;
  }
`;

const Div = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Header = ({ windowWidth, viewSize }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(isOpen(true));
  };

  return (
    <HeaderBox>
      <StyledLogo />
      <Div>
        {windowWidth >= viewSize || (
          <Link to='/' className='goToTodo'>
            <StyledButton>할 일</StyledButton>
          </Link>
        )}
        {pathname === '/figure-list' || windowWidth >= viewSize ? (
          <StyledButton onClick={handleModalOpen}>이미지</StyledButton>
        ) : (
          <Link to='/figure-list'>
            <StyledButton>도형</StyledButton>
          </Link>
        )}
      </Div>
    </HeaderBox>
  );
};

export default Header;
