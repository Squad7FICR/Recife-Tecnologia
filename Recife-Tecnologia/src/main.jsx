import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './pages/Login/index.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import Form from './components/Form.jsx';
import RecoveryPass from './pages/RecoveryPass/index.jsx';


export function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,


);
