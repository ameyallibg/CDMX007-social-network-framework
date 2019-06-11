
import React from 'react';
import{BrowserRouter as  Router, Route} from 'react-router-dom'; 
import Navigation from '../Navigation';
import LandingPage from '../LandingPage';
import SignUpPage from '../SignUpPage';
import SignInPage from '../SignInPage'; 
import HomePage from '../HomePage'; 
import * as ROUTES from  '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation/>
      <hr/>
      <Route exact path={ROUTES.LANDING} component = {LandingPage}/>
      <Route path = {ROUTES.SIGN_UP} component = {SignUpPage}/>
      <Route path = {ROUTES.SIGN_IN} component = {SignInPage}/>
      <Route path = {ROUTES.HOME} component = {HomePage}/>
  
    </div>
  </Router>
); 

export default App; 