import React from 'react';
import loginLogo from '../assets/marca_vertical_laranja.png';
import Button from './button';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
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
        <Button nome={'Cadastrar'} to="/Register" />
      </div>
    </form>
  );
};

export default Form;
