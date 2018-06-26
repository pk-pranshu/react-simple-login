import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles/app.css';
import Login from '../pages/login';
import Home from '../pages/home';

const App = () => (
  <div className="app-routes">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
);

export default App;
