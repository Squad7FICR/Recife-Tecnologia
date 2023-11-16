import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import RecoveryPass from '../pages/RecoveryPass';
import RecTeste from '../pages/RecoveryPass/RecTeste';
import withBodyStyles from '../components/StylesBody';
import Dashboard from '../pages/Dashboard';
import Relatorio from '../pages/Relatório';

const AppRoutes = () => {
  console.log('Passou por aqui');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Relatorio" element={<Relatorio />} />

      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
