import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import '../Login/style.css';
import loginImage from '../../assets/WomanPickupRelatories.jpg';
import loginLogo from '../../assets/marca_vertical_laranja.png';

const Login = () => {
  const Button = ({ nome }) => {
    return (
      <button type="submit" className="button-m" style={{ marginTop: 20 }}>
        {nome}
      </button>
    );
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src={loginImage}
          alt=""
          width={560}
          height={360}
          className="login-content_img"
        />
        <div className="login-form-container">
          <form id="loginForm">
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
                type="text"
                name="login"
                id="login"
                placeholder="seuemail@.com"
                className="login-form_input"
                autoComplete="username"
              />
              <label htmlFor="password" className="font-1-m">
                Insira sua senha:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="login-form_input"
                autoComplete="current-password"
              />
              <a href="#" className="font-1-pp" id="recoveryPass">
                Esqueceu a senha?
              </a>
              <Button nome={'Entrar'} />

              <Link to="/Register">Teste</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
