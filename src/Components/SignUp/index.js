import React, { Component} from 'react'
import { Link, withRouter} from 'react-router-dom'
import { compose } from 'recompose'
// import {SignUpLink} from '../SignUp'
// import{FirebaseContext} from '../Firebase'
import * as ROUTES from '../../Constants/routes'
import { withFirebase } from '../Firebase'


const SignUpPage = () => ( 
<div >

<h4 >SignUp</h4>
<SignUpForm/>
{/* <SignUpLink/> */}

</div>
);

const INITIAL_STATE = {
username: '',
email: '',
passwordOne: '',
passwordTwo: '',
error: null,
}

class SignUpFormBase extends Component{
    constructor(props){
        super(props)
        this.state = {...INITIAL_STATE}
    }
onSubmit = event => {
    const { email, passwordOne } = this.state;
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
    this.setState({ ...INITIAL_STATE })
    this.props.history.push(ROUTES.HOME)

    })
    .catch(error => {
    this.setState({ error });
    });
    event.preventDefault();
    };

    onChange = event =>{
        this.setState({[event.target.name]: event.target.value})

    }
    render() {
    const {
    username,
    email,
    passwordOne,
    passwordTwo,
    error,
    } = this.state;

        const isInvalid =
passwordOne !== passwordTwo ||
passwordOne === '' ||
email === '' ||
username === '';

    return (
    <form onSubmit={this.onSubmit}>

    <input 

    placeholder="Usuario" 
    name="username"
    value={username}
    onChange={this.onChange}
    type="text"
    />
 <input 

name="email"
value={email}
onChange={this.onChange}
type="text"
placeholder="Correo Electrónico"
/>
<input 

name="passwordOne"
value={passwordOne}
onChange={this.onChange}
type="password"
placeholder="Contraseña"
/>
<input

name="passwordTwo"
value={passwordTwo}
onChange={this.onChange}
type="password"
placeholder="Confirmar contraseña"
/>
<button disabled={isInvalid} type="submit" >Sign Up</button>
{error && <p>{error.message}</p>}
</form>
);
}
}

const SignUpLink = () => (
    <p>¿No tienes una cuenta <Link to={ROUTES.SIGN_UP}> Únete</Link>
    </p>
    )
// const SignUpForm = withRouter(withFirebase(SignUpFormBase))





const SignUpForm = compose(
    withRouter,
    withFirebase,
    )(SignUpFormBase)

export default SignUpPage;

export { SignUpForm, SignUpLink};