import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/login" exact render={props => <Login {...props} />} />
    </Switch>
  </BrowserRouter>);
