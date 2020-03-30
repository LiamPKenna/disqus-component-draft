import React from 'react';
import DisqusBox from './components/DisqusBox';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <DisqusBox pageId={'testerino'} pageUrl={'https://www.testerino.com/chat'} />
    </ThemeProvider>
  );
}

export default App;
