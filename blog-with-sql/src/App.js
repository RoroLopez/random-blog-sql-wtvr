import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import LoginPage from './login/App';
import SignUpPage from './signup/App';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path={ROUTES.LOGIN}  component={ LoginPage } />
        <Route path={ROUTES.SIGNUP} component={ SignUpPage } />
      </div>
    </Router>
  );
}

export default App;
