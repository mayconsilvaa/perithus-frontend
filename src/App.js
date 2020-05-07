import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

/** Context API */
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <Router history={history}>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </Router>
  );
}
