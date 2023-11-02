import React from 'react';
import loginLogo from '../assets/marca_vertical_laranja.png';
import Button from './button';
import { Link } from 'react-router-dom';

import useEmailValidation from '../js/Regex';

const Form = () => {
  const { email, emailError, handleEmailChange, validateEmail } =
    useEmailValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
  };

  const recoveryPass = () => {
    const corpo = document.querySelector('body');
    const recoveryPassForm = document.querySelector('.container-recovery-overlay');
    if (recoveryPassForm.style.display === 'none' || recoveryPassForm.style.display === '') {
      recoveryPassForm.style.display = 'flex';
      corpo.style.overflow = 'hidden';
    }
  };
    return (
      <form id="loginForm" onSubmit={handleSubmit}>
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
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p>{emailError}</p>}
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
          <Link className="font-1-pp" id="recoveryPass" onClick={recoveryPass}>
            Esqueceu a senha?
          </Link>
          <Link>CLIQUE AQUI</Link>
          <Button type="submit" nome={'Entrar'} />
        </div>
      </form>

    );
  };

  export default Form;
