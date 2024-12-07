import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importăm stilurile globale
import App from './App'; // Importăm componenta principală a aplicației

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Montează aplicația în elementul cu ID-ul "root"
);
