import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { ResetInitialStyle } from './modules/core/ResetInitialStyle';
import { theme } from './modules/core/theme';
import { store } from './modules/rootStore';

ReactDOM.render(
  <React.StrictMode>
    <ResetInitialStyle />
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
