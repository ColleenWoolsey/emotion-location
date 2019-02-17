import React, { Component } from "react"
import "./Login.css"
import "../emotion/List.css";

export default class Login extends Component {

// Set initial state
    state = {
      id: "",
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
    console.log("this.state.userName", this.state.userName);
    console.log("this.state.password", this.state.password);
    evt.preventDefault();
    
    this.props.verifyUser(this.state.userName, this.state.password)
    
    .then(users => {
      console.log("users array returned from verifyUser", users);
      
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
                   
                console.log("SS setItem user", user.id)
                console.log("SS setItem userName", user.userName)
                this.props.history.push("/home");
             
              } else {

                this.props.history.push("/")
              
            }
        })
      }})
    }

render() {
    return (
      <div className="form">
        <form className="login-container" onSubmit={this.handleLogin}>
         
          <h1 className="h1">Welcome to EmoLocation</h1>
          <br></br>
          
            
          <div className="userName">
            {/* <label htmlFor="inputUserName">
                User Name :  </label> */}
            <input onChange={this.handleFieldChange} type="text"
                    id="userName"
                    placeholder="User Name"
                    required="" autoFocus="" />
          </div>
          <br></br>
          <br></br>
          
          <div className="email">
            {/* <label htmlFor="inputUserEmail">
                Email :  </label> */}
            <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email"
                    required="" autoFocus="" />
          </div>
          <br></br>
          <br></br>
          
          <div className="password"> 
            {/* <label htmlFor="inputPassword">
                Password :  </label> */}
            <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
          </div>
          <br></br>
          <br></br>
          
          <button className="btnSignIn" type="submit"
              onClick={this.handleLogin}>
              Sign In
          </button>

          {/* <h5 className="request">Not Registered?</h5> */}

          <button className="btnSignUp" type="button"
              onClick={()=> this.props.history.push("/registration")}>
              Sign Up
          </button>
        </form>
      </div>
    )
  }
}