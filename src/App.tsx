import { useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from '@/store/hooks';
import GlobalStyle from '@/styles/global-style';
import { createTheme } from '@/styles/theme';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import ResponsiveLayout from '@/layout/ResponsiveLayout';
import { ErrorAlert } from '@/components/modals';

const App = () => {
  const themeKey = useAppSelector((state) => state.themeChange.themeKey);
  const isDarkMode = useAppSelector((state) => state.themeChange.isDarkMode);
  const theme = useMemo(
    () => createTheme(themeKey, isDarkMode),
    [themeKey, isDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <ResponsiveLayout />
        </MainContent>
        <Footer />
      </AppContainer>
      <ErrorAlert />
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0; /* flexbox에서 overflow 처리를 위해 필요 */
  /* 모바일 라우트 영역은 상위에 캔버스 배경이 없어 기본(흰색)이 비침 — 데스크톱 DesktopContainer와 동일 토큰 */
  background-color: ${({ theme }) => theme.commonColors.light_gray};
`;
