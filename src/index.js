import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/globalStyle';

reactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
