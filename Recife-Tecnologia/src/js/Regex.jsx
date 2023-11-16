// useEmailValidation.js
import { useState } from 'react';

const useEmailValidation = () => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(''); //limpa o erro quando o user começa a digitar :)
  };

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError('Insira o email de maneira correta');
    }
  };

  return { email, emailError, handleEmailChange, validateEmail };
};

export default useEmailValidation;
