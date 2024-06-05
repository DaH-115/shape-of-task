import React from 'react';
import styled from 'styled-components';
import { BtnSetting } from 'styles/Button/BtnSetting';
import { TodaysQuote } from 'components/TodaysQuote';
import TaskListCount from 'components/TaskListCount';
import AddBtn from 'styles/Button/AddBtn';

const MainPage = () => {
  return (
    <Container>
      <Wrapper>
        <TodaysQuote />
        <ResponsiveWrapper>
          <AddBtn />
        </ResponsiveWrapper>
        <TaskListCount />
        <BtnSetting />
      </Wrapper>
    </Container>
  );
};

export default React.memo(MainPage);

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  min-width: 18rem;

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
`;

const ResponsiveWrapper = styled.div`
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
