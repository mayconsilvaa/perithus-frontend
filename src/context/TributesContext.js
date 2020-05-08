import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import api from '../services/api';
import history from '../services/history';

const TributesContext = createContext();

const TributesProvider = ({ children }) => {
  const [dados, setDados] = useState([]);
  const [tipo, setTipo] = useState('');

  const allAtributes = useCallback(async ({ year, month, type }) => {
    try {
      const { data } = await api.get(`/tribute/${year}/${month}`);
      setDados(data);
      setTipo(type);
    } catch (e) {
      toast.error(e.response.data.message);
      history.push('/');
    }
  }, []);

  return (
    <TributesContext.Provider value={{ data: dados, tipo, allAtributes }}>
      {children}
    </TributesContext.Provider>
  );
};

function useTributes() {
  const context = useContext(TributesContext);

  if (!context) {
    throw new Error('useTributes must be used within an TributesProvider');
  }
  return context;
}

TributesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { TributesProvider, useTributes };
