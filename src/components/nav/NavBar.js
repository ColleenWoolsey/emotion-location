import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {

  endSessionStorage = () => {
    sessionStorage.clear()
    console.log("sessionStorage.getItem('user')", sessionStorage.getItem("user"))
  }

  render() {
    return (
      <nav>
        <ul className="nav">
          
        <li className="signout" onClick={this.endSessionStorage}>
          <Link to="/">Sign Out</Link>           
        </li>

        </ul>
      </nav>
    )   
  }
}