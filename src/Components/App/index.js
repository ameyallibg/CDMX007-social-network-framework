import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from '../Navigation'
// import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import { withAuthentication } from '../Session';

import * as ROUTES from '../../Constants/routes'


const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
     
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      {/* <Route path={ROUTES.LANDING} component={LandingPage} /> */}
     
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route  path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />

      
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    </div>
  </Router>
)

export default withAuthentication(App);