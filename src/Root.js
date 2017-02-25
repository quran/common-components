import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Main from './container/Home';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
  </Router>
  );
