import React, { Component } from 'react';  
import LogIn from './SignInPage';
import SignUp from './SignUpPage';

export class LandingPage extends React.Component {
    state = {

    }
    render (){
        return (
            <div>
            <h1>Landing page</h1>
          <LogIn/>
          <SignUp/>
          </div>
        )
    }
}

  
export default LandingPage;    