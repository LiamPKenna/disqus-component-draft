import React from 'react';
// import DisqusBox from './components/DisqusBox';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DisqusEmbed from './components/DisqusEmbed';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <DisqusEmbed websiteName={'testerino'} pageUrl={'https://www.testerino.com/chat'} blockTitle={'Testing'} />
    </ThemeProvider>
  );
}

export default App;
