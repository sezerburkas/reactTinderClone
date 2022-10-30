import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/app.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('screen'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
