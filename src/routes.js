import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Info from './pages/Info';
import Market from './pages/Market';
import Research from './pages/Research';
import NotFound from './components/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={Info} path='/info' />
      <Route component={Market} path='/market' />
      <Route component={Research} path='/research' />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
