import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/index.css';
import App from './App';
import LoginRouter from './pages/LoginRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <LoginRouter />
    </BrowserRouter>

  </React.StrictMode>
); 



