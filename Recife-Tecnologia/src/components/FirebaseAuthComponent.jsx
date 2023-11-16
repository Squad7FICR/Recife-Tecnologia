// FirebaseAuthComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase-config';

function FirebaseAuthComponent({ email, password, navigate, onLoginError }) {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validação do email com o regex
    if (!email || !validateEmail(email)) {
      setEmailError('Email precisa ser inserido em um formato válido');
    } else {
      setEmailError('');
    }

    // Validação da senha
    if (!password) {
      setPasswordError('Senha precisa ser inserida');
    } else {
      setPasswordError('');
    }

    if (email && password && !emailError) {
      try {
        await signInWithEmailAndPassword(email, password);
        // Se o login for bem-sucedido, o código abaixo não será executado
      } catch (error) {
        onLoginError(error.message);
      }
    }
  };

  if (user) {
    navigate('/Dashboard');
  }

  const recoveryPass = () => {
    const corpo = document.querySelector('body');
    const recoveryPassForm = document.querySelector(
      '.container-recovery-overlay',
    );
    if (
      recoveryPassForm.style.display === 'none' ||
      recoveryPassForm.style.display === ''
    ) {
      recoveryPassForm.style.display = 'flex';
      corpo.style.overflow = 'hidden';
    }
  };

  return (
    <div>
      {emailError && (
        <p className="font-1-pp" style={{ marginTop: 5, marginBottom: 5 }}>
          {emailError}
        </p>
      )}
      {passwordError && (
        <p className="font-1-pp" style={{ marginTop: 5, marginBottom: 5 }}>
          {passwordError}
        </p>
      )}

      <Link className="font-1-pp" id="recoveryPass" onClick={recoveryPass}>
        Esqueceu a senha?
      </Link>

      <button onClick={handleLogin} className="button-m">
        Entrar
      </button>
      {error && !emailError && (
        <p className="font-1-pp" style={{ marginTop: 20 }}>
          Credenciais incorretas, tente novamente!
        </p>
      )}
    </div>
  );
}

export default FirebaseAuthComponent;
