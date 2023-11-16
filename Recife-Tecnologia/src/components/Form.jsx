// Form.js
import React, { useState } from 'react';
import loginLogo from '../assets/marca_vertical_laranja.png';
import { useNavigate } from 'react-router-dom';
import FirebaseAuthComponent from './FirebaseAuthComponent';

function Form() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleLoginError = (errorMessage) => {
    setLoginError(errorMessage);
  };

  return (
    <div id="loginForm">
      <img
        src={loginLogo}
        width={200}
        alt=""
        className="login-content_form_img"
      />
      <div className="login-form_content">
        <label htmlFor="login" className="font-1-m">
          Insira seu email:
        </label>
        <input
          placeholder="seuemail@.com"
          type="email"
          className="login-form_input"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="font-1-m">
          Insira sua senha:
        </label>
        <input
          type="password"
          placeholder="*******"
          className="login-form_input"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* firebase auth */}
        <FirebaseAuthComponent
          email={email}
          password={password}
          navigate={navigate}
          onLoginError={handleLoginError}
        />
      </div>
    </div>
  );
}

export default Form;
