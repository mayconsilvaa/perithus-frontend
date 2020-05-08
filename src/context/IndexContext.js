import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from './AuthContext';
import { TributesProvider } from './TributesContext';
import { ProductsProvider } from './ProductsContext';

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <TributesProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </TributesProvider>
    </AuthProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
