import React from 'react';
import { Form, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import loginImage from '../../assets/ForgotPass.svg';
import FormRecovery from '../../components/FormRecovery.jsx';
import withBodyStyles from '../../components/StylesBody.jsx';
import testeImage from '../../assets/teste1.jpeg';

const RecoveryPass = () => {
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
          <FormRecovery />
        </div>
      </div>
    </div>
  );
};

const styles = `
  margin: 0;
  font-family: Montserrat, sans-serif;
  display: flex;
  justify-content: center; 
  align-items: center; 
  min-height: 100vh;
  background: url(${testeImage})   fixed;
`;

const RecoveryPassWithStyledBody = withBodyStyles(RecoveryPass, styles);

export default RecoveryPassWithStyledBody;
