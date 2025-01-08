import React from 'react';
import styled from 'styled-components';
import SettingBtn from 'components/Button/SettingBtn';
import TodaysQuote from 'components/TodaysQuote/TodaysQuote';
import TaskListCount from 'components/TaskListCount/TaskListCount';
import AddBtn from 'components/Button/AddBtn';

const MainPage = () => {
  return (
    <Container>
      <Wrapper>
        <TodaysQuote />
        <ResponsiveWrapper>
          <AddBtn />
        </ResponsiveWrapper>
        <TaskListCount />
        <SettingBtn />
      </Wrapper>
    </Container>
  );
};

export default React.memo(MainPage);

const Container = styled.div`
  flex: 1;
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 1rem;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  padding-bottom: 1rem;

  border: none;
  box-shadow: none;

  ${({ theme }) => theme.device.tablet} {
    border: 0.1rem solid ${({ theme }) => theme.commonColors.gray};
    box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  }
`;

const ResponsiveWrapper = styled.div`
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
