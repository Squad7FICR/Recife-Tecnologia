import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import RecoveryPass from '../pages/RecoveryPass';
import RecTeste from '../pages/RecoveryPass/RecTeste';
import withBodyStyles from '../components/StylesBody';

const AppRoutes = () => {
  console.log('Passou por aqui');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/RecoveryPass" element={<RecoveryPass />}></Route>{' '}
        <Route path="/RecTeste" element={<RecTeste />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
