import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import css from '../../styles/styles';
import App from 'containers/App';
import AppState from 'containers/AppState';

render(
  <BrowserRouter>
    <AppState>
      <App />
    </AppState>
  </BrowserRouter>,
  document.getElementById('root')
);
