import { ThemeProvider } from 'styled-components';
import { defalutTheme } from './styles/theme';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  return (
    <ThemeProvider theme={defalutTheme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
