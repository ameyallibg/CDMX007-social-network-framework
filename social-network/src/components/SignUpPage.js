import React, { Component } from 'react';  

export class SignUp extends React.Component {
    state = {
       emailTwo: '',
       passwordTwo: '',
       firstName: '',
       lastName: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state) 
    }
    render (){
        return (
         <div className = "container">
             <form onSubmit={this.handleSubmit} className = "white">
                 <h5 className  = "grey-text text-darken-3">sign Up</h5>
                 <div className = "input-field"> 
                 <label htmlFor = "email"> Email</label>
                 <input type= "email" id= "emailTwo" onChange={this.handleChange}/>
                 </div>
                 <div className = "input-field"> 
                 <label htmlFor = "password">password</label>
                 <input type= "password" id= "passwordTwo" onChange = {this.handleChange}/>
                 </div>
                 <div className = "input-field">
                     <label htmlFor = "lastName">Last Name</label>
                     <input type = "text" id= "lastName" onChange={this.handleChange}/>
                 </div>
                 <div className = "input-field">
                     <label htmlFor = "firstName">first Name</label>
                     <input type = "text" id= "firstName" onChange={this.handleChange}/>
                     </div>

                     <button className = "btn blue lighten-1 z-depth-0">Sign Up</button>
             </form>
         </div>
        )
    }
}


export default SignUp; 

