import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {

  endSessionStorage = () => {
    sessionStorage.clear()
  }

  render() {
    return (
      <nav>
        <ul className="nav">
            
          {this.props.emotions.map(emotion => (
          <li key={emotion.id} emotion={emotion} 
          {...this.props} className="nav-item">
              <Link to={`emotions/${emotion.id}`}></Link>
          </li>
          ))}
          <li className="signout" onClick={this.endSessionStorage}>
          <Link to="/login">Sign Out</Link> 
          {/* component={Link} to='/login'> */}
          
          </li>

        </ul>
      </nav>
    )   
  }
}