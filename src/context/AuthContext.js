import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import api from '../services/api';
import history from '../services/history';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const token = localStorage.getItem('@GestorFinanceiro:token');
    const user = localStorage.getItem('@GestorFinanceiro:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });
  const signIn = useCallback(async ({ email, password }) => {
    try {
      if (password.length < 8) {
        toast.info('Por Gentileza! Informe a sua senha de 8 caracteres.');
      } else {
        const { data } = await api.post('/login', {
          email,
          password,
        });

        const { token, user } = data;

        localStorage.setItem('@GestorFinanceiro:token', token);
        localStorage.setItem('@GestorFinanceiro:user', JSON.stringify(user));

        setUsuario({ token, user });

        if (data) {
          history.push('/');
        }
      }
    } catch (e) {
      toast.error(
        'Não foi possível logar na plataforma! A senha informada está incorreta.'
      );
      history.push('/');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GestorFinanceiro:token');
    localStorage.removeItem('@GestorFinanceiro:user');

    setUsuario({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: usuario.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AuthProvider, useAuth };
