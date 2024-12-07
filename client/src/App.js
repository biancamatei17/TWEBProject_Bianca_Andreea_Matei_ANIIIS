import React from 'react';
import './App.css'; // Importăm fișierul CSS specific pentru App
import CategoryList from './components/CategoryList';
import CreateCategory from './components/CreateCategory';
import DocumentList from './components/DocumentList';
import CreateDocument from './components/CreateDocument';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="header">Document Manager</h1>
      </header>
      <div className="container">
        <div className="stanga">
          <CreateCategory />
          <CategoryList />
        </div>
        <div className="centru">
          <CreateDocument />
        </div>
        <div className="dreapta">
          <DocumentList />
        </div>
      </div>
      <footer id="footer">
        <p>© 2024 Document Manager</p>
      </footer>
    </div>
  );
}

export default App;
