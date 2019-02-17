import React, { Component } from "react"
import "./Login.css"
import "../emotion/List.css";

export default class Registration extends Component {

  state = {
    userName: "",
    email: "",
    password: ""
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = (e) => {
    e.preventDefault()
  }

  constructNewUser = () => {
    const newUser = {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        id: this.state.id
    }

    this.props.addUser(newUser).then(response => {
        console.log(response)
        this.props.history.push("/home")
    })
    }

  render() {
    return (
    <div className="form">
      <form className="login-container" onSubmit={this.handleRegister}>

        <h1 className="welcome">Register at EmoLocation</h1>
            
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
                
          <button type="submit" onClick={() => this.constructNewUser()} 
              className="btnSignUp">
              Sign Up
          </button>
        </form>

    </div>
    )
  }
}