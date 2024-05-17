// index.js

import App from './App.js';

if (typeof React === 'undefined') {
  var React = require('react');
}
if (typeof ReactDOM === 'undefined') {
  var ReactDOM = require('react-dom');
}

var gas;
if (window.gas) {
  gas = window.gas; // Use the global gas object if it exists
} else {
  gas = require("./mock_gas.js"); // Fallback to require in development
  require('./index.css');
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
