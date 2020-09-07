import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Container } from '@material-ui/core';

const containStyle = {
  backgroundColor:'#69AD53',
  border: '5em solid',
  borderColor: '#69AD53',
  borderRadius: '7em',
  color: '#C1F762'
}
const headerStyle = {
  fontSize: '5em',
}
ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth='xl' style={containStyle}>
      <h1 style={headerStyle}>Schwifty</h1>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

