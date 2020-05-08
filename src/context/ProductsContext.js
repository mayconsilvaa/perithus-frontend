import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import api from '../services/api';
import history from '../services/history';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [dados, setDados] = useState([]);
  const [tipoP, setTipo] = useState('');

  const allProducts = useCallback(async ({ year, month, type }) => {
    try {
      const { data } = await api.get(`/product/${year}/${month}`);
      setDados(data);
      setTipo(type);
    } catch (e) {
      toast.error(e.response.data.message);
      history.push('/dashboard');
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ data: dados, tipoP, allProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within an ProductsProvider');
  }
  return context;
}

ProductsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ProductsProvider, useProducts };
