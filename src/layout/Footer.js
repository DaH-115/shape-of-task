import styled, { css } from 'styled-components';
import { FaGithub, FaHome } from 'react-icons/fa';

const FooterBox = styled.footer`
  ${({ theme }) => {
    return css`
      width: 100%;
      background-color: ${theme.colors.orange};
    `;
  }}
`;

const FooterIcons = styled.div`
  padding: 25px;

  .git-icon {
    width: 30px;
    height: 30px;
    color: #fff;
    margin-right: 12px;
    cursor: pointer;
  }

  .home-icon {
    width: 30px;
    height: 30px;
    color: #fff;
    cursor: pointer;
  }

  .footer-title {
    display: none;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterBox>
        <FooterIcons>
          <p className='footer-title'>세모 네모 동그라미 TODO LIST</p>
          <FaGithub className='git-icon' />
          <FaHome className='home-icon' />
        </FooterIcons>
      </FooterBox>
    </>
  );
};

export default Footer;
