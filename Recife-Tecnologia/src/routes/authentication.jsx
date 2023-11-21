// Authentication.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated ? <Element /> : <Navigate to="/" replace />}
  />
);

export default PrivateRoute;
