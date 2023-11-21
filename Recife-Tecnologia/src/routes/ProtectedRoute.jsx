// ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../services/firebase-config'; // Importe o objeto 'auth' do seu arquivo Firebase config

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = () => {
    // Verificar se o usuário está autenticado usando Firebase Authentication
    const user = auth.currentUser;
    return !!user; // Retorna true se o usuário estiver autenticado, false caso contrário
  };

  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Element /> : <Navigate to="/" />}
    />
  );
};

export default ProtectedRoute;
