import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
        <nav>
            <ul className="nav">

                <li className="nav-title">
                    <h3>I am feeling ...</h3>
                </li>

                {this.props.emotions.map(emotion => (
                <li key={emotion.id} emotion={emotion} 
                {...this.props} className="nav-item">
                    <Link to={`emotions/${emotion.id}`}></Link>
                </li>
                ))}

                <li>Logout</li>

            </ul>
        </nav>
    )   
  }
}