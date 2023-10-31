import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './pages/Login/index.jsx';
import Register from './pages/Register/index.jsx';
import './style.css';
import AppRoutes from './routes/AppRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);
