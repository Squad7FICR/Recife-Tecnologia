import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Register />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
