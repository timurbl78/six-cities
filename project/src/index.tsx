import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CONFIG = {
  OFFERS_COUNT: 50,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={CONFIG.OFFERS_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
