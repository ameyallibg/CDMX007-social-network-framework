import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../Constants/routes'
import './passwordforget.css'

const PasswordForgetPage = () => (
<div className="row">
<div className="white col l4 offset-l4">
<h4>Forgot your password?</h4>
<PasswordForgetForm />
</div></div>
)
const INITIAL_STATE = {
email: '',
error: null,
}
class PasswordForgetFormBase extends Component {
constructor(props) {
super(props);
this.state = { ...INITIAL_STATE }
}
onSubmit = event => {
const { email } = this.state;
this.props.firebase
.doPasswordReset(email)
.then(() => {
this.setState({ ...INITIAL_STATE })
})
.catch(error => {
    this.setState({ error })
});
event.preventDefault()
}
onChange = event => {
this.setState({ [event.target.name]: event.target.value })
}
render() {
const { email, error } = this.state
const isInvalid = email === ''
return (
<form onSubmit={this.onSubmit}>
<input
name="email"
value={this.state.email}
onChange={this.onChange}
type="text"
placeholder="Email Address"
/>
<button disabled={isInvalid} type="submit" className="col l12 btn-small blue  width">
RESET PASSWORD
</button>
{error && <p>{error.message}</p>}
</form>
);
}
}
const PasswordForgetLink = () => (
<p>
<Link to={ROUTES.PASSWORD_FORGET}>Forgot your password?</Link>
</p>
);
export default PasswordForgetPage
const PasswordForgetForm = withFirebase(PasswordForgetFormBase)
export { PasswordForgetForm, PasswordForgetLink }