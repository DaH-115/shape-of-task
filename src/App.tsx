import { useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector } from "@/store/hooks";
import GlobalStyle from "@/styles/global-style";
import { createTheme } from "@/styles/theme";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import ResponsiveLayout from "@/layout/ResponsiveLayout";
import { ErrorAlert } from "@/components/modals";

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
        <ViewportContent>
          <Header />
          <MainContent>
            <ResponsiveLayout />
          </MainContent>
        </ViewportContent>
        <Footer />
      </AppContainer>
      <ErrorAlert />
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const ViewportContent = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0; /* 헤더를 제외한 남은 영역 안에서 내부 스크롤을 허용 */
  background-color: ${({ theme }) => theme.commonColors.light_gray};
`;
