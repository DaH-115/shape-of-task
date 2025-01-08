import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';
import { ReactComponent as Logo } from 'assets/Logo.svg';

export const SideMenuBtn = styled.button`
  display: block;

  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

export const SideMenuIcon = styled(IoMenu)`
  font-size: 1.5rem;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 1rem;

  ${({ theme }) => theme.device.tablet} {
    padding: 0.5rem 2rem;
  }
`;

export const LogoWrapper = styled.div`
  width: 4rem;

  ${({ theme }) => theme.device.tablet} {
    width: 3rem;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
