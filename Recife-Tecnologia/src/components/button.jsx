import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ nome, to }) => {
  return (
    <Link to={to} className="button-m" style={{ marginTop: 20 }}>
      {nome}
    </Link>
  );
};
export default Button;
