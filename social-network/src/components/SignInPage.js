import React, { Component } from 'react';  

export class LogIn extends React.Component {
    state = {
       email: '',
       password: ''
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
                 <h5 className  = "grey-text text-darken-3">sign In</h5>
                 <div className = "input-field"> 
                 <label htmlFor = "email"> Email</label>
                 <input type= "email" id= "email" onChange={this.handleChange}/>
                 </div>
                 <div className = "input-field"> 
                 <label htmlFor = "password">password</label>
                 <input type= "password" id= "password" onChange = {this.handleChange}/>
                 </div>
                 <div className = "input-field">
                     <button className = "btn blue lighten-1 z-depth-0">Log  In</button>
                 </div>
             </form>
         </div>
        )
    }
}


export default LogIn; 