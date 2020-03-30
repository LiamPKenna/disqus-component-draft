import React from 'react';
import DisqusBox from './components/DisqusBox';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <DisqusBox pageId={'testerino'} pageUrl={'testerino'} />
    </ThemeProvider>
  );
}

export default App;
