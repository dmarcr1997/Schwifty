import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, Heading, Box } from "@chakra-ui/core";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { personReducer } from './Reducers/PersonReducer'
const headerStyle = {
  backgroundColor:'#69AD53',
  color: '#C1F762',
  margin: 0,
  padding: 20,
}

const store = createStore(personReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <ThemeProvider >
      <Provider store={store}>
      <Heading size='6xl' fontSize='5em' w='100%' style={headerStyle}>Schwifty</Heading>
      <Box h='100%' w='100%'>
        <App/>    
      </Box>
      </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);

