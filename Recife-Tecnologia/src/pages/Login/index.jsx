//importing  components
import Form from '../../components/Form';
import FormRecoveryv3 from '../../components/FormRecovery';
import React from 'react';
import withBodyStyles from '../../components/StylesBody.jsx';
import testeImage from '../../assets/teste1.jpeg';
import { usePageTitle } from '../../main.jsx';
//importing styles & responsiveSTYLES.
import '../../style.css';
import './style.css';
//importing assets

import loginImage from '../../assets/WomanPickupRelatories.jpg';
import logoImage from '../../assets/marca_vertical_laranja.png';
import FormRecovery from '../../components/FormRecovery';
import Button from '../../components/button';

function TitleLogin() {
  usePageTitle('Recife Tecnologia | Login');
}
const Login = () => {
 TitleLogin();
  return (
    <div>
      <div className="container-recovery-overlay">
          <FormRecoveryv3 />
      </div>
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
            <Form />
          </div>
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
  background: url(${testeImage})fixed;
`;

const LoginWithStyledBody = withBodyStyles(Login, styles);

export default LoginWithStyledBody;
