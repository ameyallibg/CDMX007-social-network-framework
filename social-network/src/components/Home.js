import React, { Component } from 'react';  
import LogIn from '../auth/LogIn';
import SignUp from '../auth/SignUp';

export class Home extends React.Component {
    state = {

    }
    render (){
        return (
            <div>
            <h1>this is Home</h1>
          <LogIn/>
          <SignUp/>
          </div>
        )
    }
}

  
export default Home;    