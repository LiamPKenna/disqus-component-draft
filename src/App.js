import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DisqusEmbed from './components/DisqusEmbed';
import Card from '@material-ui/core/Card';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: purple,
      secondary: green,
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
