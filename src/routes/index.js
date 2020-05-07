import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

/** Import Pages */
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
