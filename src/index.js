import { Box, createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';


const theme = createTheme({
  palette: {
    primary: purple,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

