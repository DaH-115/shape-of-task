import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const HeaderBox = styled.header`
  width: 100%;
  padding: 15px 0 15px 0;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
    </HeaderBox>
  );
};

export default Header;
