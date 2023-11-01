import React from 'react';
import loginLogo from '../assets/marca_vertical_laranja.png';
import Button from './button';
import { Link } from 'react-router-dom';

const FormRecovery = () => {
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
        <Link
          to={'/'}
          className="font-1-pp"
          id="recoveryPass"
          style={{ marginLeft: '300px' }}
        >
          voltar
        </Link>
        <Button nome={'Enviar'} />
      </div>
    </form>
  );
};

export default FormRecovery;
