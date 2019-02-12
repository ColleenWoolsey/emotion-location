import React, { Component } from "react"

import "./Login.css"
import AppViews from "../AppViews";

export default class Login extends Component {

// Set initial state
    state = {
        userName: "",
        email: "",
        password: "",
    }

// Update state whenever an input field is edited
handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

handleLogin = evt => {
    console.log(this.state.userName);
    console.log(this.state.email);
    console.log(this.state.password);
    evt.preventDefault();

    this.props.verifyUser(this.state.userName, this.state.password)

    .then(user => {
        console.log("users []", user)
        if (user.length < 1) {
            alert("Sorry, not finding you. Try registering below")
        } else {
            user.forEach(person => {
            let loggedIn= false;
            if (this.state.userName === person.userName 
                && this.state.password === person.password) {
                    loggedIn = true;
                }
            if (loggedIn === true) {
                sessionStorage.setItem("User", person.id);
                let sessionPerson = sessionStorage.setItem("User")
                console.log("sessionPerson", sessionPerson)
                this.props.history.push("/home");
            }
        })
      }
    })
  }

render() {
    return (
      <div className="login-container">
        <form className="logInForm" onSubmit={this.handleLogin}>

          <h1 className="welcome">Welcome to EmoLocation</h1>
            
          <div className="form-group">
            <label htmlFor="inputUserName">
                User Name:  </label>
            <input onChange={this.handleFieldChange} type="text"
                    id="userName"
                    placeholder="User Name"
                    required="" autoFocus="" />
          </div>

          <div className="form-group">
            <label htmlFor="inputUserEmail">
                Email:  </label>
            <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email"
                    required="" autoFocus="" />
          </div>
          
          <div className="form-group"> 
            <label htmlFor="inputPassword">
                Password:  </label>
            <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
          </div>

            <button className="loginButton" type="submit"
                onClick={this.handleLogin}>
                Login
            </button>

            <h5 className="request">Not Registered?</h5>

            <button className="registerButton" type="button"
                onClick={()=> this.props.history.push("/registration")}>
                Create an Account
            </button>
        </form>
      </div>
    )
  }
}