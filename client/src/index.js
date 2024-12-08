import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css'; //We import the global styles
import App from './App'; // We import the main application component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Mounts the application in the element with id "root"
);