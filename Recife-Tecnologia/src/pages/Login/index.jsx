//importing  components
import Form from '../../components/Form';
import React from 'react';
import withBodyStyles from '../../components/StylesBody.jsx';
import testeImage from '../../assets/teste1.jpeg';

//importing styles & responsiveSTYLES.
import '../../style.css';
import './style.css';
//importing assets

import loginImage from '../../assets/WomanPickupRelatories.jpg';

const Login = () => {
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
          <Form />
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

const LoginWithStyledBody = withBodyStyles(Login, styles);

export default LoginWithStyledBody;
