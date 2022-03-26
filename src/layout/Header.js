import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const HeaderBox = styled.header`
  width: 100%;
  height: 75px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderBox>
      <Logo className='logo' />
    </HeaderBox>
  );
};

export default Header;
