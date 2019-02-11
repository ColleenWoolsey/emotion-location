import React, { Component } from "react"
import "./Login.css"

export default class Login extends Component {

// Set initial state
    state = {
        username: "",
        email: "",
        password: "",

    }

// Update state whenever an input field is edited
handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

handleLogin = e => {
    console.log(this.state.userName);
    console.log(this.state.email);
    console.log(this.state.password);
    e.preventDefault();
    this.props.verifyUser(this.state.username, this.state.email, this.state.password)
    if(this.props.users.length < 1) {
        alert("We can't seem to find you! Try registering below")
    } else {
        // if(this.props.users.length < 1) {
        this.props.users.forEach(user => {
            let loggedIn= false;
            if (this.state.userName === user.userName 
                && this.state.email === user.email
                && this.state.password === user.password) {
                    loggedIn = true;
                }
            if (loggedIn === true){
                sessionStorage.setItem("user", user.id);
                this.props.history.push("/navBar");
            }
        })
    }

    sessionStorage.setItem(
      "credentials",
      JSON.stringify({
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
      })
    );
  };

render() {
    return (
        <form className="logInForm" onSubmit={this.handleLogin}>
            <h1 className="welcome">Welcome to EmoLocation</h1>
            <h1 className="request">Please sign in</h1>
            <label htmlFor="inputUserName">
                User Name
            </label>
            <input onChange={this.handleFieldChange} type="text"
                    id="userName"
                    placeholder="User Name"
                    required="" autoFocus="" />

            <label htmlFor="inputUserEmail">
                Email
            </label>
            <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email"
                    required="" autoFocus="" />
            
            <label htmlFor="inputPassword">
                Password
            </label>
            <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />

            <button className="signInButton" type="submit">
                Sign in
            </button>

            <button className="registerButton" type="button"
                        onClick={()=> this.props.history.push("/register")}
                        className="btn btn-success">
                    Register
                </button>
        </form>
    )
}
}