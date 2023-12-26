import React from 'react';
import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';
import { ReactComponent as Logo } from 'assets/Logo.svg';

const NewHeader = () => {
  const [isToggle, setIsToggle] = React.useState(false);
  const todayDate = React.useMemo(() => new Date(), []);
  const today = todayDate.toLocaleDateString();

  const menuToggleHandler = React.useCallback(() => {
    setIsToggle((prev) => !prev);
    console.log(isToggle, '슬라이드 메뉴 오픈');
  }, [isToggle]);

  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <LogoWrapper>
            <StyledLogo />
          </LogoWrapper>
          {/* TODO: 슬라이드 메뉴 */}
          <IoMenu fontSize={'2rem'} onClick={menuToggleHandler} />
        </Wrapper>
        <Contents>
          {/* TODO: 날씨 API 적용 */}
          {today}
          {' ☀️ 맑음'}
        </Contents>
      </HeaderWrapper>
    </>
  );
};

export default React.memo(NewHeader);

const HeaderWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.commonColors.black};
  background-color: #fff;
  padding: 2rem 1rem 1rem;
`;

const LogoWrapper = styled.div`
  width: 30%;
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  margin-top: 0.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
