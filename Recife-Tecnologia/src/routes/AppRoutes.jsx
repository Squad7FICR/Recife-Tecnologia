import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import withBodyStyles from '../components/StylesBody';
import Dashboard from '../pages/Dashboard';
import Relatorio from '../pages/Report';

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
