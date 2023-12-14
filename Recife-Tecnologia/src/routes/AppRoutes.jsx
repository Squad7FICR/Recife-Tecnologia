import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';

import Dashboard from '../pages/Dashboard';
import Relatorio from '../pages/Report';
import Teste from '../components/Header';

const AppRoutes = () => {
  console.log('Passou por aqui');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Teste" element={<Teste />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Relatorio" element={<Relatorio />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
