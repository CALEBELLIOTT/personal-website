import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/custom.scss';
import './scss/main.scss';
// eslint-disable-next-line no-extend-native
Date.prototype.mmddyyyy = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [(mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd, this.getFullYear()].join('/');
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
