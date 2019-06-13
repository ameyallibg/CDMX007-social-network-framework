import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

import { withFirebase } from '../Firebase'; 
import * as ROUTE from '../../Constants/routes';

const passwordForgetPage = () => (
    <div>
        <h1>passwordForget</h1>
        <passwordForgetForm/>
    </div>
); 

const INITAL_STATE = {
    email: '',
    error: null,

}; 

class passwordForgetFormBase extends Component {
    constructor(props){
        super(props);
        this.state = {...INITAL_STATE};
    }

    onSubmit = event => {
        const { email } = this.state;
        this.props.withFirebase 
         .doPasswordReset(email)
          .then(() => {
              this.setState({...INITAL_STATE});
          })
          .catch(error => {
              this.setState({ error });
          });
          event.preventDefault();
    };
    onChange =event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render(){
        const { email, error } = this.state;
         const isInvalid = email === ''; 

         return (
             <form onSubmit= {this.onSubmit}>
                 <input 
                 name= "email"
                 value={this.state.email}
                 onChange={this.onChange}
                 type="text"
                 placeholder="Email Address"/> 

                 <button disabled = {isInvalid} type = "submit">Reset my password</button>
                 {error && <p>{error.message}</p>}
             </form>
         );
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to = {ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);

export default passwordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default { PasswordForgetForm, PasswordForgetLink }; 
