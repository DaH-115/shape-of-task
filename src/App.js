import { ThemeProvider } from 'styled-components';
import { defalutTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import AddButton from './components/AddButton';
import ModalInput from './components/ModalInput';

function App() {
  return (
    <ThemeProvider theme={defalutTheme}>
      <GlobalStyle />
      <ModalInput />
      <Header />
      <Main />
      <AddButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
