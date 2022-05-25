import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './consts/theme';

const history = createBrowserHistory({ window });
console.log(theme);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HistoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
