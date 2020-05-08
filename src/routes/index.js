import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

/** Import Pages */
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Register from '../pages/register';
import RegisterTribute from '../pages/tributes/cadastro';
import TributeEdit from '../pages/tributes/editar';
import RegisterProduct from '../pages/products/cadastro';
import ProductEdit from '../pages/products/editar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/tributes/register" component={RegisterTribute} isPrivate />
      <Route
        path="/tributes/edit/:tributeId"
        component={TributeEdit}
        isPrivate
      />
      <Route path="/products/register" component={RegisterProduct} isPrivate />
      <Route
        path="/products/edit/:productId"
        component={ProductEdit}
        isPrivate
      />
    </Switch>
  );
}
