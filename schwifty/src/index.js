import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, Heading, Box } from "@chakra-ui/core";

const headerStyle = {
  fontSize: '5em',
  backgroundColor:'#69AD53',
  color: '#C1F762',
  margin: 0,
  padding: 20,
}

ReactDOM.render(
    <ThemeProvider >
      <Heading style={headerStyle}>Schwifty</Heading>
      <Box w='100%'>
        <App/>    
      </Box>
    </ThemeProvider>,
  document.getElementById('root')
);

