import React from 'react';
import loginLogo from '../assets/marca_vertical_laranja.png';
import Button from './button';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase-config';
import { sendPasswordResetEmail } from 'firebase/auth';

const recoveryPassForm = () => {
  const recoverypassForm = document.querySelector('.container-recovery-overlay');
  const corpo = document.querySelector('body');
  if (recoverypassForm.style.display === 'flex' || recoverypassForm.style.display === '') {
    recoverypassForm.style.display = 'none';
    recoverypassForm.style.overflow = 'auto';
    corpo.style.overflow = 'auto';
  }
};
const recoveryPassword = (e) => {
  e.preventDefault();
 const email = document.querySelector('#login').value;
  sendPasswordResetEmail(auth, email).then(() => { 
    alert('Email enviado com sucesso!');
  }).catch(() => {
    if(email === '' || email === null || email === undefined){
      alert("Campo vazio, por favor preencha o campo com seu email!");
    }else{
      alert("Email não encontrado, por favor tente novamente!");
    }
    
  });
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
          type="email"
          name="email"
          id="login"
          placeholder="seuemail@email.com"
          className="login-form_input"
          autoComplete="username"
        />
        <Link
          onClick={recoveryPassForm}
          className="font-1-pp"
          id="recoveryPass"
          style={{ marginLeft: '300px' }}
        >
          voltar
        </Link>
        <button onClick={recoveryPassword} className='button-m' >Enviar</button>
      </div>
    </form>
  );
};

export default FormRecoveryv;