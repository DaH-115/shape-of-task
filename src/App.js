import { ThemeProvider } from 'styled-components';
import { defalutTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defalutTheme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
