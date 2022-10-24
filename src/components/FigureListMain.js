import styled from 'styled-components';
import useArrCheck from '../hooks/useArrCheck';
import useGetwindowWidth from '../hooks/useGetwindowWidth';

import { Main } from '../layout/Main';
import Message from '../layout/Message';
import FigureListPage from '../pages/FigureListPage';

export const FigureListWrapper = styled(Main)`
  height: auto;
`;

const FigureListMain = () => {
  const { windowWidth, desktopSize } = useGetwindowWidth();
  const arrCheck = useArrCheck();

  return (
    <>
      {windowWidth >= desktopSize && (
        <FigureListWrapper>
          {arrCheck === undefined ? (
            <Message>가끔은 여백도 괜찮아요.😌</Message>
          ) : (
            <FigureListPage />
          )}
        </FigureListWrapper>
      )}
    </>
  );
};

export default FigureListMain;
