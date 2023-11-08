import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <BrowserRouter>
        <Link to="/">Login</Link>
        </BrowserRouter>
    </div>
  );
};

export default Register;
