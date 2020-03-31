import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DisqusEmbed from './components/DisqusEmbed';
import Card from '@material-ui/core/Card';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <DisqusEmbed websiteName={'testerino'} pageUrl={'https://www.testerino.com/chat'} blockTitle={'Testing'} />
      </Card>
    </ThemeProvider>
  );
}

export default App;
