import React from 'react';
import loginLogo from '../assets/marca_vertical_laranja.png';
import { Link, useNavigate } from 'react-router-dom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase-config';
import { useState } from 'react';



function Form() {
  const navegate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  if(loading){ // se achar melhor criamos ao para carregar a pagina.
    return <p>Carregando...</p>;
  }
  if(user){ //Criando a pagina do dash colocarémos para redirecionar para a pagina do dash.
    return navegate('/Dashboard');
  }
  if(error){ //Vamos precisar criar uma mensagem de erro.
    return  <a href="/">Erro ao logar, clique aqui e tente novamente</a>;
  }
  const recoveryPass = () => {
    const corpo = document.querySelector('body');
    const recoveryPassForm = document.querySelector('.container-recovery-overlay');
    if (recoveryPassForm.style.display === 'none' || recoveryPassForm.style.display === '') {
      recoveryPassForm.style.display = 'flex';
      corpo.style.overflow = 'hidden';
    }
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
            placeholder='seuemail@.com'
            type='email'
            className="login-form_input"
            autoComplete='email'
            onChange={e=>setEmail(e.target.value)}
          />
          <label htmlFor="password" className="font-1-m">
            Insira sua senha:
          </label>
          <input
            type="password"
            placeholder="*******"
            className="login-form_input"
            onChange={e=>setPassword(e.target.value)}
          />
          <Link className="font-1-pp" id="recoveryPass" onClick={recoveryPass}>
            Esqueceu a senha?
          </Link>
          <button onClick={handleLogin} className='button-m' >Entrar</button>

        </div>
      </div>
  );
};



export default Form;
