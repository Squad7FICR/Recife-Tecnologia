import React from 'react';
import loginLogo from '../assets/marca_vertical_laranja.png';
import Button from './button';
import { Link } from 'react-router-dom';

const recoveryPass = () => {
  const recoveryPassForm = document.querySelector('.container-recovery-overlay');
  const corpo = document.querySelector('body');
  if (recoveryPassForm.style.display === 'flex' || recoveryPassForm.style.display === '') {
    recoveryPassForm.style.display = 'none';
    recoveryPassForm.style.overflow = 'auto';
    corpo.style.overflow = 'auto';
  }
};
const FormRecoveryv = () => {
  return (
    <form id="recoveryForm">
      <div className="recovery-form-container">
      <img
        src={loginLogo}
        width={200}
        alt=""
        className="login-content_form_img"
      />
      <br />
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
          onClick={recoveryPass}
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

export  default  FormRecoveryv;