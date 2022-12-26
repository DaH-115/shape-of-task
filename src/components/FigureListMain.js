import styled from 'styled-components';
import useArrCheck from '../hooks/useArrCheck';
import useGetwindowWidth from '../hooks/useGetwindowWidth';

import Main from '../layout/Main';
import MessageBox from '../layout/MessageBox';
import FigureListPage from '../pages/FigureListPage';

const FigureListMain = () => {
  const { windowWidth, desktopSize } = useGetwindowWidth();
  const arrCheck = useArrCheck();

  return (
    <>
      {windowWidth >= desktopSize && (
        <FigureListWrapper>
          {arrCheck === undefined ? (
            <MessageBox messgae='가끔은 여백도 괜찮아요.😌' />
          ) : (
            <FigureListPage />
          )}
        </FigureListWrapper>
      )}
    </>
  );
};

export default FigureListMain;

const FigureListWrapper = styled(Main)`
  height: auto;
`;
