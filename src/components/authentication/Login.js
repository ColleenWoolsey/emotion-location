import React, { Component } from "react"

import "./Login.css"
import AppViews from "../AppViews";

export default class Login extends Component {

// Set initial state
    state = {
        userName: "",
        email: "",
        password: "",
        user: ""
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
    // this.props.verifyUser(this.props.user.userName, this.props.user.password)
    this.props.verifyUser(this.state.userName, this.state.password)
    // this.props.verifyUser(userName, password)

    .then(users => {
      console.log("users []", users);

      if (users.length < 1) {
          alert("Sorry, not finding you. Try registering below")
      } else {
        users.forEach(user => {
        let loggedIn= false;
          if (this.state.userName === user.userName 
              && this.state.password === user.password) {
                  loggedIn = true;
              }
          if (loggedIn === true) {
              
                sessionStorage.setItem("user", user.id);
                sessionStorage.setItem("userName", user.userName)
                    sessionStorage.setItem(
                          "credentials",
                          JSON.stringify({
                              username: this.state.username,
                              password: this.state.password,
                              status:true,
                          })
                      )
                console.log("this.props from login", this.props)
                console.log("this.state from login", this.state)
                this.props.history.push("/home");
             
              } else {

                this.props.history.push("/")
              
            }
        })
      }})
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