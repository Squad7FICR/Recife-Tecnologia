import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => {
  console.log('Passou por aqui');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
